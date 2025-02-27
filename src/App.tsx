import React from "react";
import WorkflowEditor from "./components/WorkflowEditor";

const App: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <WorkflowEditor />
    </div>
  );
};

export default App;
