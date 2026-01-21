'use client';

import { Idea } from '@/data/ideas';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ExternalLink, Sparkles } from 'lucide-react';

interface ViewDetailsModalProps {
  idea: Idea | null;
  isOpen: boolean;
  onClose: () => void;
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800 border-green-300',
  intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  advanced: 'bg-red-100 text-red-800 border-red-300',
};

export default function ViewDetailsModal({ idea, isOpen, onClose }: ViewDetailsModalProps) {
  if (!idea) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4 mb-4">
            <DialogTitle className="text-2xl font-bold leading-tight pr-8">{idea.title}</DialogTitle>
            <Badge className={`${difficultyColors[idea.difficulty]} capitalize font-semibold shrink-0`} variant="outline">
              {idea.difficulty}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-sm">
            {idea.estimatedTime && (
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span className="font-medium">{idea.estimatedTime}</span>
              </div>
            )}
            {idea.productCategory && (
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                  {idea.productCategory}
                </Badge>
              </div>
            )}
            {idea.complexity && (
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-purple-50 text-purple-700">
                  Complexity: {idea.complexity}
                </Badge>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <DialogDescription className="text-gray-700 leading-relaxed whitespace-pre-line">
              {idea.description}
            </DialogDescription>
          </div>

          {/* FHE Use Case */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border-2 border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-lg text-purple-900">FHE Use Case</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{idea.fheUseCase}</p>
          </div>

          {/* Tech Stack */}
          {idea.techStack && idea.techStack.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {idea.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm bg-purple-50 text-purple-700 hover:bg-purple-100 px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="pt-4 border-t">
            <Button
              onClick={() => window.open('https://cofhe-docs.fhenix.zone/', '_blank')}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white text-lg py-6"
            >
              Start Building with Fhenix
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
