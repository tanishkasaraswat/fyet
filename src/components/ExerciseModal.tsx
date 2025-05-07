import React, { useState, useEffect } from 'react';
import { Exercise } from '../types';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import Timer from './Timer';

interface ExerciseModalProps {
  exercise: Exercise | null;
  isOpen: boolean;
  onClose: () => void;
}

const ExerciseModal: React.FC<ExerciseModalProps> = ({
  exercise,
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    // Reset state when modal closes or exercise changes
    if (!isOpen || !exercise) {
      setActiveTab("instructions");
    }
  }, [isOpen, exercise]);

  if (!exercise) return null;

  const handleOpenYoutube = () => {
    window.open(exercise.youtubeLink, '_blank', 'noopener,noreferrer');
  };

  const calculateTextSize = (text: string): string => {
    if (text.length > 500) return 'text-sm';
    if (text.length > 300) return 'text-base';
    return 'text-lg';
  };

  return (
    <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white/95 backdrop-blur-md border-none shadow-xl">
        <div className="relative w-full h-[250px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10" />
          <img src={exercise.image} alt={exercise.name} className="w-full h-full object-cover" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/10 hover:bg-white/30 transition-all duration-200"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
          <div className="absolute bottom-4 left-4 z-20">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : exercise.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
              {exercise.difficulty}
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="absolute bottom-4 right-4 z-20 bg-white/20 backdrop-blur-sm border border-white/10 hover:bg-white/30 transition-all duration-200"
            onClick={handleOpenYoutube}
          >
            <Youtube className="h-4 w-4 mr-2" />
            <span className="text-xs">Watch Video</span>
          </Button>
        </div>

        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">{exercise.name}</DialogTitle>
            <DialogDescription className="flex flex-wrap gap-2 mt-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${exercise.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : exercise.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
                {exercise.difficulty}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                {exercise.painType}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                {exercise.days}s
              </span>
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="instructions" className="mt-6" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="timer" className="bg-orange-100 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Timer
              </TabsTrigger>
            </TabsList>

            <TabsContent value="instructions" className="space-y-4 animate-fade-in">
              <div>{exercise.precautions}</div>
            </TabsContent>

            <TabsContent value="timer" className="animate-fade-in">
              <Timer defaultDuration={exercise.days} />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseModal;