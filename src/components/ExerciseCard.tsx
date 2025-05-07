import React from 'react';
import { Exercise } from '../types';
import { cn } from '@/lib/utils';

interface ExerciseCardProps {
  exercise: Exercise;
  onClick: () => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onClick }) => {
  // Determine if badges should be shown (not for Meditation and Surya Namaskar)
  const showBadges = exercise.subcategory !== "Meditation" && exercise.subcategory !== "Surya Namaskar";
  
  return (
    <div 
      className="relative overflow-hidden rounded-xl shadow-sm border border-border/50 card-hover cursor-pointer group"
      onClick={onClick}
    >
      <div className="aspect-video w-full overflow-hidden relative">
        <img 
          src={exercise.image} 
          alt={exercise.name} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Difficulty badge - only show for non Meditation/Surya Namaskar */}
        {showBadges && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 17L9 11L13 15L21 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-white text-sm">{exercise.difficulty}</span>
          </div>
        )}
        
        {/* Days badge - only show for non Meditation/Surya Namaskar */}
        {showBadges && exercise.days && (
          <div className="absolute bottom-3 right-3">
            <span className="text-white text-sm">{exercise.days} Days</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-medium text-lg leading-tight mb-1">{exercise.name}</h3>
        {exercise.displaySubcategory && (
          <p className="text-sm text-muted-foreground">{exercise.displaySubcategory}</p>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;