import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/components/ui/use-toast";
import { Timer as TimerIcon } from "lucide-react";
interface TimerProps {
  defaultDuration?: number;
  onComplete?: () => void;
}
const Timer: React.FC<TimerProps> = ({
  defaultDuration = 30,
  onComplete
}) => {
  const [minutes, setMinutes] = useState(Math.floor(defaultDuration / 60));
  const [seconds, setSeconds] = useState(defaultDuration % 60);
  const [timeLeft, setTimeLeft] = useState(defaultDuration);
  const [isActive, setIsActive] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Format time as MM:SS
  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle minute input change
  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0 && value <= 10) {
      setMinutes(value);
      setTimeLeft(value * 60 + seconds);
    }
  };

  // Handle second input change
  const handleSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0 && value < 60) {
      setSeconds(value);
      setTimeLeft(minutes * 60 + value);
    }
  };

  // Handle slider change
  const handleSliderChange = (value: number[]) => {
    const totalSeconds = value[0];
    setTimeLeft(totalSeconds);
    setMinutes(Math.floor(totalSeconds / 60));
    setSeconds(totalSeconds % 60);
  };

  // Toggle timer
  const toggleTimer = () => {
    if (timeLeft <= 0) {
      // Reset timer if it has completed
      setTimeLeft(minutes * 60 + seconds);
      setIsActive(true);
    } else {
      // Otherwise toggle active state
      setIsActive(!isActive);
    }
  };

  // Reset timer
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(minutes * 60 + seconds);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Toggle between slider and input view
  const toggleView = () => {
    setShowSlider(!showSlider);
  };

  // Effect for counting down
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            setIsActive(false);
            if (onComplete) onComplete();
            toast({
              title: "Timer Complete",
              description: "Your practice session is complete!"
            });
            if (intervalRef.current) window.clearInterval(intervalRef.current);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (!isActive && intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [isActive, onComplete]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);
  return <div className="w-full max-w-sm mx-auto">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Timer</h3>
          <Button variant="ghost" size="sm" onClick={toggleView} className="text-xs">
            {showSlider ? "Use Inputs" : "Use Slider"}
          </Button>
        </div>
        
        {showSlider ? <div className="space-y-4">
            <Slider value={[timeLeft]} min={10} max={600} step={5} onValueChange={handleSliderChange} className="w-full" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>10s</span>
              <span>10m</span>
            </div>
          </div> : <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minutes">Minutes</Label>
              <Input id="minutes" type="number" min={0} max={10} value={minutes} onChange={handleMinuteChange} disabled={isActive} className="w-full" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seconds">Seconds</Label>
              <Input id="seconds" type="number" min={0} max={59} value={seconds} onChange={handleSecondChange} disabled={isActive} className="w-full" />
            </div>
          </div>}
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TimerIcon className={`w-5 h-5 ${isActive ? 'text-primary animate-pulse-soft' : 'text-muted-foreground'}`} />
            <span className="text-xl font-mono font-semibold">
              {formatTime(timeLeft)}
            </span>
          </div>
          
          <div className="flex space-x-2">
            <Button onClick={toggleTimer} variant={isActive ? "outline" : "default"} size="sm" className="transition-all duration-300 text-slate-50 bg-orange-600 hover:bg-orange-500">
              {isActive ? "Pause" : timeLeft === 0 ? "Restart" : "Start"}
            </Button>
            {isActive && <Button onClick={resetTimer} variant="outline" size="sm">
                Reset
              </Button>}
          </div>
        </div>
      </div>
    </div>;
};
export default Timer;