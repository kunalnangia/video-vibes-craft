
import React from 'react';
import { Shield, Video, Subtitles } from 'lucide-react';

interface VideoStatusIndicatorsProps {
  aspectRatio: string;
  greenScreenEnabled?: boolean;
  autoCaptionsEnabled?: boolean;
  isLoading?: boolean;
}

const VideoStatusIndicators: React.FC<VideoStatusIndicatorsProps> = ({
  aspectRatio,
  greenScreenEnabled = false,
  autoCaptionsEnabled = false,
  isLoading = false
}) => {
  return (
    <div className="absolute top-2 left-2 flex flex-col gap-2">
      {/* Format indicator */}
      <div className="bg-black/40 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
        <Video className="h-3.5 w-3.5" />
        <span>{aspectRatio.charAt(0).toUpperCase() + aspectRatio.slice(1)}</span>
      </div>
      
      {/* Green screen status */}
      {greenScreenEnabled && (
        <div 
          className="bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1"
          data-testid="green-screen-indicator"
        >
          <Shield className="h-3.5 w-3.5" />
          <span>Green Screen</span>
        </div>
      )}
      
      {/* Auto captions status */}
      {autoCaptionsEnabled && (
        <div 
          className="bg-blue-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1"
          data-testid="captions-indicator"
        >
          <Subtitles className="h-3.5 w-3.5" />
          <span>Auto Captions</span>
        </div>
      )}
      
      {/* Loading status */}
      {isLoading && (
        <div className="bg-purple-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          <span className="animate-pulse">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default VideoStatusIndicators;
