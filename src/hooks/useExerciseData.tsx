
import { useExerciseApi } from './useExerciseApi';
import { useExerciseFilters } from './useExerciseFilters';
import { ActiveFilters } from '@/types';

export function useExerciseData() {
  const { exercises, isLoading, error, totalExercises } = useExerciseApi();
  const { 
    filterOptions, 
    activeFilters, 
    filteredExercises, 
    updateFilter, 
    applyFilters, 
    clearFilters, 
    filteredCount 
  } = useExerciseFilters(exercises);

  return {
    exercises: filteredExercises,
    isLoading,
    error,
    filterOptions,
    activeFilters,
    updateFilter,
    applyFilters,
    clearFilters,
    totalExercises,
    filteredCount,
  };
}
