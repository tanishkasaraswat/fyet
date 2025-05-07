import { useState, useMemo } from 'react';
import { Exercise, ActiveFilters, FilterOptions } from '@/types';

export function useExerciseFilters(exercises: Exercise[]) {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    ageGroup: null,
    days: null,
    difficulty: null,
  });
  
  const [appliedFilters, setAppliedFilters] = useState<ActiveFilters>({
    ageGroup: null,
    days: null,
    difficulty: null,
  });

  const filterOptions = useMemo(() => {
    if (!exercises.length) return { 
      ageGroup: [],
      days: [],
      difficulty: [],
    };
    
    const ageGroup = ['Child', 'Adolescent', 'Adult', 'Old Age'];
    const days = [3, 4, 5, 6, 7];
    const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
    
    return {
      ageGroup: ageGroup,
      days: days,
      difficulty: difficulties,
    };
  }, [exercises]);
  
  const filteredExercises = useMemo(() => {
    if (!appliedFilters.ageGroup && !appliedFilters.days && !appliedFilters.difficulty) {
      const featuredExercises = exercises.filter(ex => 
        ex.subcategory === "Meditation" || ex.subcategory === "Surya Namaskar"
      );
      
      return featuredExercises.map(ex => ({
        ...ex,
        displaySubcategory: "Featured Practices"
      }));
    }
    
    return exercises.filter(exercise => {
      const ageGroupMatch = !appliedFilters.ageGroup || exercise.ageGroup === appliedFilters.ageGroup;
      const daysMatch = !appliedFilters.days || exercise.days === appliedFilters.days;
      const difficultyMatch = !appliedFilters.difficulty || exercise.difficulty === appliedFilters.difficulty;
      
      return ageGroupMatch && daysMatch && difficultyMatch;
    }).map(ex => ({
      ...ex,
      displaySubcategory: ex.subcategory
    }));
  }, [exercises, appliedFilters]);

  const updateFilter = (filterType: keyof ActiveFilters, value: string | null | number) => {
    const normalizedValue = value === "any" ? null : value;
    
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: normalizedValue
    }));
  };

  const applyFilters = () => {
    setAppliedFilters(activeFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      ageGroup: null,
      days: null,
      difficulty: null,
    };
    
    setActiveFilters(emptyFilters);
    setAppliedFilters(emptyFilters);
  };

  return {
    filterOptions,
    activeFilters,
    filteredExercises,
    updateFilter,
    applyFilters,
    clearFilters,
    filteredCount: filteredExercises.length,
  };
}
