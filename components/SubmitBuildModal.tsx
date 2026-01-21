'use client';

import { useState } from 'react';
import { Idea } from '@/data/ideas';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface SubmitBuildModalProps {
  idea: Idea | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SubmitBuildModal({ idea, isOpen, onClose }: SubmitBuildModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!idea) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Submit Your Build</DialogTitle>
          <DialogDescription className="text-gray-600">
            Share your implementation of <span className="font-semibold text-purple-600">{idea.title}</span>
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="mb-4 text-6xl">🎉</div>
            <h3 className="text-2xl font-bold text-purple-600 mb-2">Coming Soon!</h3>
            <p className="text-gray-600">
              Submission functionality will be available soon. Stay tuned!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Builder Name */}
            <div className="space-y-2">
              <Label htmlFor="builderName" className="text-sm font-semibold">
                Builder Name *
              </Label>
              <Input
                id="builderName"
                placeholder="Your name or handle"
                required
                className="w-full"
              />
            </div>

            {/* Product Name */}
            <div className="space-y-2">
              <Label htmlFor="productName" className="text-sm font-semibold">
                Product Name *
              </Label>
              <Input
                id="productName"
                placeholder="What did you build?"
                required
                className="w-full"
              />
            </div>

            {/* Twitter Post URL */}
            <div className="space-y-2">
              <Label htmlFor="twitterUrl" className="text-sm font-semibold">
                Twitter Post URL
              </Label>
              <Input
                id="twitterUrl"
                type="url"
                placeholder="https://twitter.com/..."
                className="w-full"
              />
              <p className="text-xs text-gray-500">Share your announcement tweet (optional)</p>
            </div>

            {/* Telegram ID */}
            <div className="space-y-2">
              <Label htmlFor="telegramId" className="text-sm font-semibold">
                Telegram ID
              </Label>
              <Input
                id="telegramId"
                placeholder="@yourusername"
                className="w-full"
              />
              <p className="text-xs text-gray-500">So we can reach out to you (optional)</p>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-sm font-semibold">
                Notes
              </Label>
              <Textarea
                id="notes"
                placeholder="Tell us about your build, any challenges you faced, or what you learned..."
                rows={4}
                className="w-full resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
              >
                Submit Build
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
