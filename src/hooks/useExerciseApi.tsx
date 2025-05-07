import { useState, useEffect } from 'react';
import { Exercise } from '@/types';
import { toast } from '@/components/ui/use-toast';
import { YOGA_POSES } from '@/data/YOGA_POSES';

export function useExerciseApi() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize as true
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        // In a real app, you would fetch from your API:
        // const response = await fetch('https://fyet-2.onrender.com/api/v1/exercises');
        // if (!response.ok) throw new Error('Network response was not ok');
        // const data = await response.json();
        
        // Simulate API delay for better UX testing
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Using local yoga poses data as fallback
        setExercises(YOGA_POSES);
        
        toast({
          title: "Exercises Loaded",
          description: "Successfully loaded exercise data",
          variant: "default",
        });
      } catch (err) {
        console.error('Error fetching exercise data:', err);
        setError('Failed to fetch exercises. Using local data instead.');
        setExercises(YOGA_POSES);
        
        toast({
          title: "Using Local Data",
          description: error || "Fallback to local exercise data",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercises();
  }, [error]); // Add error as dependency since it's used in toast

  return {
    exercises,
    isLoading,
    error,
    totalExercises: exercises.length,
  };
}