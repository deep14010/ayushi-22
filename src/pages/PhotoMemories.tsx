import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MusicButton from "@/components/MusicButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PhotoMemories = () => {
  const photos = [
    {
      driveId: "10XXAgtPXidhcMMHFqhTZEecCBCNHinGw",
      // caption: "Remember this day?"
    },
    {
      driveId: "1nqtKdW5By_Nty-UJfYj88XKegWiQ-1U0",
      // caption: "Such a fun moment!"
    },
    {
      driveId: "1a-nHpKccXEJdN3p7W-BYKDrO20Ddc9Ac",
      // caption: "One of our best memories"
    }
    ,
    {
      driveId: "1EUpfr360-BzsSSsdx4tIajbx2dnFoGiO"
    },
    {
      driveId: "1NFF5nFlZgyYQPbK_uB8_P8yDBZKs_avE"
    },
    // {
    //   driveId: "1Ca4ZHdcGnepnL1o1boAKlR66xg90KUVS"
    // },
    // {
    //   driveId: "1rZ26YU5Mnj39q46a1wPzlSd8m9ufCZbH"
    // },
    {
      driveId: "1DHSi3l2elWIvBRiCmqkinfwreh14dNjm"
    },
    {
      driveId: "1qT6NnNPOA4xNOV4apf8xWMQuqR9CR_Qo"
    },
    {
      driveId: "11IfDXzgbMx2nveGmnz0GvIJ3JoLqHjmZ"
    },
    {
      driveId: "1c9Ewe9RxMupHYSZ4UlBpL-HB4Ju1fX6s"
    },
    {
      driveId: "1Fu1BQd9o7fwKZzTaWG-jg6Uag0Apk3P0"
    },
    {
      driveId: "1YSQyDSSlQklhPvFLfjrt5Xd6ANUp7dme"
    },
    {
      driveId: "1u1X7AA_x3DTJfs71wKcgvSXabblxut2W"
    },
    {
      driveId: "1iMjjY1tVA_4tqsQNjQhVyBS6pJWCRU2R"
    }
  ];

  const getThumbnailUrl = (driveId: string) => {
    return `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white p-8">
      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-4xl font-bold mb-4">Our Beautiful Memories</h1>
        <p className="text-gray-600 mb-8">A collection of our precious moments together</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={getThumbnailUrl(photo.driveId)}
                      // alt={`Memory ${index + 1}`}
                      className="w-full h-[900px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                      <p className="text-lg">{photo.caption}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <MusicButton />
    </div>
  );
};

export default PhotoMemories;
