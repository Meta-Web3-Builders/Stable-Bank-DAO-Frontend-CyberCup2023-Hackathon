import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ApproveDAOMember from "./pages/ApproveDAOMember";
import CreateProposal from "./pages/CreateProposal";
import FundMe from "./pages/FundMe";
import Home from "./pages/Home";
import JoinDAO from "./pages/JoinDAO";
import ProjectDetails from "./pages/ProjectDetails";
import ProposalDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import Proposals from "./pages/Projects";
import ViewProposal from "./pages/ViewProposal";
import VoteProposal from "./pages/VoteProposal";
import AdminRoute from "./route/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fund-me" element={<FundMe />} />
        <Route path="/join-dao" element={<JoinDAO />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/create-proposal" element={<CreateProposal />} />
        <Route path="/vote-proposal" element={<VoteProposal />} />
        <Route path="/vote-proposal/:id" element={<ViewProposal />} />
        <Route
          path="/approve-dao-member"
          element={
            <AdminRoute>
              <ApproveDAOMember />
            </AdminRoute>
          }
        />
        <Route path="/proposal/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
