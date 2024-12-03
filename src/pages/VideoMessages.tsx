import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import MusicButton from "@/components/MusicButton";

const VideoMessages = () => {
  const videos = [
    {
      id: 1,
      name: "Smriti",
      driveId: "1EUpfr360-BzsSSsdx4tIajbx2dnFoGiO",
      message: "Happy birthday! Remember that time we...",
      youtubeUrl: "https://youtube.com/shorts/fSe2j1o1RA0?feature=share"
    },

    {
      id: 2,
      name: "Guneet",
      driveId: "10XXAgtPXidhcMMHFqhTZEecCBCNHinGw",
      message: "3 things I love the most about you...",
      youtubeUrl: "https://youtube.com/shorts/fxki-BURDGQ?feature=share"
    },

    {
      id: 3,
      name: "Noor",
      driveId: "1nqtKdW5By_Nty-UJfYj88XKegWiQ-1U0",
      message: "Happy birthday! The 3 things I love about you are...",
      youtubeUrl: "https://youtube.com/shorts/xmo5791pJik?si=fvabz6E6TbA_MkNP"
    },

    {
      id: 4,
      name: "Sumbul",
      driveId: "1a-nHpKccXEJdN3p7W-BYKDrO20Ddc9Ac",
      message: "From Sumbul to Sushi...",
      youtubeUrl: "https://youtube.com/shorts/TmkIFdWe2V8?feature=share"
    },

    {
      id: 5,
      name: "Angela",
      driveId: "1NFF5nFlZgyYQPbK_uB8_P8yDBZKs_avE",
      message: "What are the three things I love about you...",
      youtubeUrl: "https://youtube.com/shorts/iGRVxxr1l4g?si=M4bzCEKVxfQCend8"
    },

    {
      id: 6,
      name: "Vaishnav",
      driveId: "1iMjjY1tVA_4tqsQNjQhVyBS6pJWCRU2R",
      message: "Happy birthday Ayushi!",
      youtubeUrl: "https://youtube.com/shorts/HotCfmEdL98?si=es1CG1L2YAaBc8c2"
    },

    {
      id: 7,
      name: "Kushagra",
      driveId: "1QDHpxVZ6JXHBvC4iFAIruCMpL3gq50dH",
      message: "Happy birthday! There's so much I'd like to say...",
      youtubeUrl: "https://youtube.com/shorts/IxPH7KVWatE?si=gCUw4UyBpAAa112h"
    },
    {
      id: 8,
      name: "Siddhant",
      driveId: "1DHSi3l2elWIvBRiCmqkinfwreh14dNjm",
      message: "Best wishes on your special day!",
      youtubeUrl: "https://youtube.com/shorts/oGs60aAzjHM?feature=share"
    },
    {
      id: 9,
      name: "Nayanika",
      driveId: "1qT6NnNPOA4xNOV4apf8xWMQuqR9CR_Qo",
      message: "Happy 22nd birthday!",
      youtubeUrl: "https://youtube.com/shorts/AlswD-MEwow?feature=share"
    },
    {
      id: 10,
      name: "Deep",
      driveId: "1765HAvSF1MafaaHbo2LnQh-tDyP2KQk_",
      message: "Happy birthday to my precious little girl!",
      youtubeUrl: "https://youtube.com/shorts/1o0BM2zB-6E"
    }

  ];

  const getThumbnailUrl = (driveId: string) => {
    return `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white py-16">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 hover-lift"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-4">
            With Love & Gratitude
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Went on to find 3 things people love about you...
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ended up finding 30 of them, so here they are :)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <motion.a
              key={video.id}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-xl overflow-hidden hover-lift block"
            >
              <div className="relative aspect-video">
                <img
                  src={getThumbnailUrl(video.driveId)}
                  alt={`Message from ${video.name}`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center"
                  >
                    <ExternalLink className="w-8 h-8 text-gray-900" />
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2">From {video.name}</h3>
                <p className="text-gray-600">{video.message}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <MusicButton />
      </div>
    </div>
  );
};

export default VideoMessages;