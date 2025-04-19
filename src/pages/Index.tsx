import React from "react";
import { EventList } from "@/components/events/EventList";

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        
        <EventList />
      </div>
    </main>
  );
};

export default Index;
