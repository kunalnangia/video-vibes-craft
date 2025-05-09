
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardFooter,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight,
  Lightbulb,
  BarChart3,
  Clock,
  ArrowUp,
  Settings,
  Sparkles
} from "lucide-react";

interface LifecycleStage {
  name: string;
  status: 'completed' | 'in-progress' | 'pending' | 'issue';
  score: number;
  recommendations: string[];
}

const VideoLifecycleManagement: React.FC = () => {
  const [showDetails, setShowDetails] = useState<string | null>(null);
  const [isOptimizing, setIsOptimizing] = useState<string | null>(null);
  const [isFixing, setIsFixing] = useState<string | null>(null);
  const [stages, setStages] = useState<LifecycleStage[]>([
    {
      name: "Planning & Scripting",
      status: "completed",
      score: 85,
      recommendations: [
        "Add more specific call-to-actions in your script",
        "Consider shorter sentences for better flow",
        "Include 3-5 keywords related to your target audience"
      ]
    },
    {
      name: "Production Quality",
      status: "issue",
      score: 65,
      recommendations: [
        "Improve lighting in scenes 2 and 4",
        "Consider stabilizing your footage",
        "Audio levels are inconsistent throughout the video"
      ]
    },
    {
      name: "Editing & Enhancement",
      status: "in-progress",
      score: 70,
      recommendations: [
        "Add more b-roll footage to illustrate key points",
        "Transitions between scenes can be smoother",
        "Consider adding subtle background music"
      ]
    },
    {
      name: "Optimization & Distribution",
      status: "pending",
      score: 0,
      recommendations: [
        "Add proper meta descriptions and tags",
        "Optimize thumbnail for higher click rates",
        "Schedule publishing at peak audience times"
      ]
    }
  ]);
  
  // Overall lifecycle score
  const overallScore = stages.reduce((total, stage) => 
    total + (stage.status !== 'pending' ? stage.score : 0), 0) / 
    stages.filter(stage => stage.status !== 'pending').length;
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'issue':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-gray-400" />;
      default:
        return null;
    }
  };
  
  const getStatusColor = (score: number): string => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  const handleOptimize = (stageName: string) => {
    setIsOptimizing(stageName);
    toast.success(`Optimizing ${stageName}...`);
    
    // Simulate optimization process
    setTimeout(() => {
      const updatedStages = stages.map(stage => {
        if (stage.name === stageName) {
          const newScore = Math.min(100, stage.score + Math.floor(Math.random() * 15) + 5);
          const newStatus: LifecycleStage['status'] = newScore >= 80 ? 'completed' : stage.status;
          return {
            ...stage,
            score: newScore,
            status: newStatus
          };
        }
        return stage;
      });
      
      setStages(updatedStages);
      setIsOptimizing(null);
      toast.success(`${stageName} optimized successfully!`);
    }, 2500);
  };
  
  const handleFixIssues = (stageName: string) => {
    setIsFixing(stageName);
    toast.success(`Applying automatic fixes for ${stageName}...`);
    
    // Simulate issue fixing process
    setTimeout(() => {
      toast("Analyzing issues...", {
        description: "Identifying problematic areas"
      });
    }, 1000);
    
    setTimeout(() => {
      toast("Applying fixes...", {
        description: "Implementing technical improvements"
      });
    }, 2500);
    
    setTimeout(() => {
      const updatedStages = stages.map(stage => {
        if (stage.name === stageName) {
          const newScore = Math.min(100, stage.score + Math.floor(Math.random() * 20) + 10);
          const newStatus: LifecycleStage['status'] = newScore >= 75 ? 'in-progress' : 'issue';
          return {
            ...stage,
            score: newScore,
            status: newStatus
          };
        }
        return stage;
      });
      
      setStages(updatedStages);
      setIsFixing(null);
      toast.success(`Fixed major issues in ${stageName}`);
    }, 4000);
  };
  
  const handleViewAnalytics = () => {
    toast("Opening analytics dashboard...");
    
    setTimeout(() => {
      toast.success("Analytics dashboard ready", {
        description: "Showing detailed performance metrics"
      });
    }, 1500);
  };
  
  const handleAIOptimization = () => {
    toast("Starting AI optimization process...");
    
    setTimeout(() => {
      toast("AI analyzing video content...", {
        description: "Identifying areas for improvement"
      });
    }, 1000);
    
    setTimeout(() => {
      toast("Applying AI enhancements...", {
        description: "Optimizing audio, visuals, and pacing"
      });
    }, 3000);
    
    setTimeout(() => {
      // Update all stages with improved scores
      const updatedStages = stages.map(stage => {
        if (stage.status !== 'pending') {
          const improvement = Math.floor(Math.random() * 15) + 5;
          const newScore = Math.min(100, stage.score + improvement);
          
          // Explicitly cast to the correct type
          let newStatus: LifecycleStage['status'];
          if (newScore >= 80) {
            newStatus = 'completed';
          } else if (newScore >= 70) {
            newStatus = 'in-progress';
          } else {
            newStatus = 'issue';
          }
          
          return {
            ...stage,
            score: newScore,
            status: newStatus
          };
        }
        return stage;
      });
      
      setStages(updatedStages);
      toast.success("AI optimization complete!", {
        description: "Multiple aspects of your video have been improved"
      });
    }, 5000);
  };
  
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Video Lifecycle Management</h2>
          <p className="text-gray-600">Analyze and optimize your video's entire production cycle</p>
        </div>
        
        <div className="text-right">
          <div className="text-3xl font-bold">
            {Math.round(overallScore)}%
          </div>
          <div className="text-sm text-gray-500">Overall Health</div>
        </div>
      </div>
      
      <div className="mb-6">
        <Progress 
          value={overallScore} 
          className={`h-2 bg-gray-200 ${getStatusColor(overallScore)}`}
        />
      </div>
      
      <div className="space-y-4 mb-6">
        {stages.map((stage) => (
          <div key={stage.name}>
            <div 
              className="flex justify-between items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
              onClick={() => setShowDetails(showDetails === stage.name ? null : stage.name)}
            >
              <div className="flex items-center gap-3">
                {getStatusIcon(stage.status)}
                <span className="font-medium">{stage.name}</span>
                {stage.status === 'issue' && (
                  <span className="px-2 py-0.5 text-xs bg-red-100 text-red-800 rounded-full">
                    Needs attention
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                {stage.status !== 'pending' && (
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">{stage.score}%</div>
                    <div 
                      className={`w-3 h-3 rounded-full ${
                        stage.score >= 80 ? 'bg-green-500' : 
                        stage.score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                    ></div>
                  </div>
                )}
                <ChevronRight 
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    showDetails === stage.name ? 'transform rotate-90' : ''
                  }`} 
                />
              </div>
            </div>
            
            {showDetails === stage.name && (
              <Card className="mt-2 border-t-0 rounded-t-none">
                <CardContent className="pt-4">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-500">Observations & Recommendations</h4>
                    <ul className="mt-2 space-y-2">
                      {stage.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {stage.status !== 'pending' && (
                    <div className="flex flex-wrap gap-3">
                      {stage.status === 'issue' && (
                        <Button 
                          variant="destructive"
                          size="sm" 
                          onClick={() => handleFixIssues(stage.name)}
                          disabled={isFixing === stage.name}
                        >
                          {isFixing === stage.name ? (
                            <>
                              <span className="animate-spin mr-2">⚙️</span> Fixing...
                            </>
                          ) : (
                            'Fix Issues'
                          )}
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        onClick={() => handleOptimize(stage.name)}
                        disabled={isOptimizing === stage.name}
                      >
                        {isOptimizing === stage.name ? (
                          <>
                            <span className="animate-spin mr-2">⚙️</span> Optimizing...
                          </>
                        ) : (
                          'Optimize'
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Performance Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Estimated Engagement Rate</span>
                <span className="font-medium">72%</span>
              </li>
              <li className="flex justify-between">
                <span>Expected View Duration</span>
                <span className="font-medium">2:15</span>
              </li>
              <li className="flex justify-between">
                <span>Click-Through Rate Prediction</span>
                <span className="font-medium">3.8%</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={handleViewAnalytics}>
              <BarChart3 className="h-4 w-4 mr-2" />
              View Detailed Analytics
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              Optimization Potential
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Production Quality</span>
                  <span className="font-medium">+25% potential</span>
                </div>
                <Progress value={25} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>SEO & Distribution</span>
                  <span className="font-medium">+40% potential</span>
                </div>
                <Progress value={40} className="h-1" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Engagement Features</span>
                  <span className="font-medium">+35% potential</span>
                </div>
                <Progress value={35} className="h-1" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleAIOptimization}>
              <Sparkles className="h-4 w-4 mr-2" />
              Apply AI Optimization
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default VideoLifecycleManagement;
