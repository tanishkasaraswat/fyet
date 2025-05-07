import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FilterOptions, ActiveFilters } from '../types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, X } from 'lucide-react';
interface ExerciseFiltersProps {
  filterOptions: FilterOptions;
  activeFilters: ActiveFilters;
  updateFilter: (filterType: keyof ActiveFilters, value: string | null | number) => void;
  clearFilters: () => void;
  applyFilters: () => void;
}
const ExerciseFilters: React.FC<ExerciseFiltersProps> = ({
  filterOptions,
  activeFilters,
  updateFilter,
  clearFilters,
  applyFilters
}) => {
  const hasActiveFilters = Object.values(activeFilters).some(value => value !== null);
  return <div className="w-full animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-medium">Filters</h3>
        
        {hasActiveFilters && <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm h-9 px-3 text-primary hover:text-primary">
            Clear all
          </Button>}
      </div>
      
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Difficulty filter */}
        <div className="min-w-[200px]">
          <Select value={activeFilters.difficulty?.toString() || ""} onValueChange={value => updateFilter('difficulty', value || null)}>
            <SelectTrigger className="w-full border border-gray-300 rounded-full h-12">
              <SelectValue placeholder="Difficulty - Any -" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Type of Pain filter */}
        <div className="min-w-[200px]">
          <Select value={activeFilters.painType?.toString() || ""} onValueChange={value => updateFilter('painType', value || null)}>
            <SelectTrigger className="w-full border border-gray-300 rounded-full h-12">
              <SelectValue placeholder="Pain Type - Any -" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="neck">Neck Pain</SelectItem>
              <SelectItem value="shoulder">Shoulder Pain</SelectItem>
              <SelectItem value="wrist">Wrist Pain</SelectItem>
              <SelectItem value="ankle">Ankle Pain</SelectItem>
              <SelectItem value="knee">Knee Pain</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Age Group filter */}
        <div className="min-w-[200px]">
          <Select value={activeFilters.ageGroup?.toString() || ""} onValueChange={value => updateFilter('ageGroup', value || null)}>
            <SelectTrigger className="w-full border border-gray-300 rounded-full h-12">
              <SelectValue placeholder="Age - Any -" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="Child">Child</SelectItem>
              <SelectItem value="Adolescent">Adolescent</SelectItem>
              <SelectItem value="Adult">Adult</SelectItem>
              <SelectItem value="Old Age">Old Age</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Days filter */}
        <div className="min-w-[200px]">
          <Select value={activeFilters.days?.toString() || ""} onValueChange={value => updateFilter('days', value ? parseInt(value) : null)}>
            <SelectTrigger className="w-full border border-gray-300 rounded-full h-12">
              <SelectValue placeholder="Days - Any -" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="3">3 Days</SelectItem>
              <SelectItem value="4">4 Days</SelectItem>
              <SelectItem value="5">5 Days</SelectItem>
              <SelectItem value="6">6 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Apply button */}
        <Button onClick={applyFilters} className="text-white rounded-full min-w-[150px] h-12 text-base bg-orange-600 hover:bg-orange-500">
          Apply
        </Button>
      </div>
    </div>;
};
// Removed local declaration of ActiveFilters as it is imported from '../types'
export default ExerciseFilters;