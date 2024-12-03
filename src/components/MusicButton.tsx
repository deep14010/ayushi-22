import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";
import { motion } from "framer-motion";
import { useAudio } from "@/contexts/AudioContext";

const MusicButton = () => {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-8 right-8"
    >
      <Button
        onClick={togglePlay}
        className={`rounded-full w-12 h-12 ${
          isPlaying ? "bg-primary" : "bg-primary/90"
        } hover:bg-primary shadow-lg`}
        size="icon"
      >
        <Music2 className="w-6 h-6 text-white" />
      </Button>
    </motion.div>
  );
};

export default MusicButton;