'use client';

import { Idea } from '@/data/ideas';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, ChevronRight } from 'lucide-react';

interface IdeaCardProps {
  idea: Idea;
  onViewDetails: (idea: Idea) => void;
  onSubmitBuild: (idea: Idea) => void;
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800 border-green-300',
  intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  advanced: 'bg-red-100 text-red-800 border-red-300',
};

export default function IdeaCard({ idea, onViewDetails, onSubmitBuild }: IdeaCardProps) {
  const truncateDescription = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-purple-300">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <Badge className={`${difficultyColors[idea.difficulty]} capitalize font-semibold`} variant="outline">
            {idea.difficulty}
          </Badge>
          {idea.estimatedTime && (
            <div className="flex items-center text-xs text-gray-500 gap-1">
              <Clock className="h-3 w-3" />
              <span>{idea.estimatedTime}</span>
            </div>
          )}
        </div>
        <CardTitle className="text-xl font-bold leading-tight">{idea.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <CardDescription className="text-gray-600 leading-relaxed">
          {truncateDescription(idea.description)}
        </CardDescription>

        {idea.techStack && idea.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {idea.techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs bg-purple-50 text-purple-700 hover:bg-purple-100">
                {tech}
              </Badge>
            ))}
            {idea.techStack.length > 4 && (
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                +{idea.techStack.length - 4}
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col gap-2 pt-4 border-t">
        <Button
          onClick={() => onViewDetails(idea)}
          variant="outline"
          className="w-full group hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700"
        >
          View Details
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button
          onClick={() => onSubmitBuild(idea)}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
        >
          Submit Build
        </Button>
      </CardFooter>
    </Card>
  );
}
