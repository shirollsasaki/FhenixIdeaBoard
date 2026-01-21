'use client';

import { useState } from 'react';
import { ideas, featuredIdea } from '@/data/ideas';
import IdeaCard from '@/components/IdeaCard';
import ViewDetailsModal from '@/components/ViewDetailsModal';
import SubmitBuildModal from '@/components/SubmitBuildModal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Code, Wrench, Puzzle } from 'lucide-react';
import type { Idea } from '@/data/ideas';

export default function Home() {
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const featuredIdeaData = ideas.find((idea) => idea.id === featuredIdea.ideaId);
  const viberCodedIdeas = ideas.filter((idea) => idea.type === 'vibecode');
  const toBuildIdeas = ideas.filter((idea) => idea.type === 'to-build');
  const integrationIdeas = ideas.filter((idea) => idea.type === 'integration');

  const handleViewDetails = (idea: Idea) => {
    setSelectedIdea(idea);
    setIsDetailsModalOpen(true);
  };

  const handleSubmitBuild = (idea: Idea) => {
    setSelectedIdea(idea);
    setIsSubmitModalOpen(true);
  };

  return (
    <>
      {/* Featured Hero Section */}
      {featuredIdeaData && (
        <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <Badge className="mb-6 bg-yellow-400 text-yellow-900 border-yellow-300 font-bold px-4 py-1 text-sm">
              <Sparkles className="h-4 w-4 inline mr-2" />
              FEATURED
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {featuredIdeaData.title}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl leading-relaxed">
              {featuredIdeaData.description.substring(0, 200)}...
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {featuredIdeaData.techStack?.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-sm px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <Button
              onClick={() => window.open('https://cofhe-docs.fhenix.zone/', '_blank')}
              size="lg"
              className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-8 py-6"
            >
              {featuredIdea.ctaText}
            </Button>
          </div>
        </section>
      )}

      {/* VibeCoded Section */}
      <section id="vibecoded" className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Code className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              VibeCoded Ideas - Built & Ready
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Example projects to inspire you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {viberCodedIdeas.map((idea) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                onViewDetails={handleViewDetails}
                onSubmitBuild={handleSubmitBuild}
              />
            ))}
          </div>
        </div>
      </section>

      {/* To Build Section */}
      <section id="to-build" className="py-20 bg-gradient-to-b from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Wrench className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Ideas to Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your next project with Fhenix
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toBuildIdeas.map((idea) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                onViewDetails={handleViewDetails}
                onSubmitBuild={handleSubmitBuild}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="py-20 bg-gradient-to-b from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
              <Puzzle className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              Integration Ideas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Add privacy to your existing product
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationIdeas.map((idea) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                onViewDetails={handleViewDetails}
                onSubmitBuild={handleSubmitBuild}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      <ViewDetailsModal
        idea={selectedIdea}
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
      />
      <SubmitBuildModal
        idea={selectedIdea}
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </>
  );
}
