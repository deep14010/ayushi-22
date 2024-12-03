import { motion } from "framer-motion";
import { Heart, Video, Camera, MessageSquareDashed } from "lucide-react";
import { Link } from "react-router-dom";
import MusicButton from "@/components/MusicButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-4 font-medium">
            Happy Birthday
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Happy 22nd Birthday!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Since you're bored of listening to me talk about how you're the best, I asked a few people what they think about you...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <img
            src="https://deep14010.github.io/ayushi-22/ayushi-collage.png"
            alt="Birthday celebration"
            className="w-full h-[650px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/videos">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl p-8 text-center cursor-pointer"
            >
              <Video className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2">Video Messages</h3>
              <p className="text-gray-600">
                Here are 3 things people love about you!
              </p>
            </motion.div>
          </Link>

          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl p-8 text-center cursor-pointer"
            >
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2">To the prettiest girl</h3>
              <p className="text-gray-600">
                Keep lighting up the world with your smile and being the cutest human in the world!
              </p>
            </motion.div>
          </Link>

          <Link to="/message">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl p-8 text-center cursor-pointer"
            >
              <MessageSquareDashed className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold mb-2">Special Message</h3>
              <p className="text-gray-600">
                A personal note just for you
              </p>
            </motion.div>
          </Link>
        </div>
        <MusicButton />
      </main>
    </div>
  );
};

export default Index;
