import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MusicButton from "@/components/MusicButton";

const SpecialMessage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white p-8">
      <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="font-serif text-4xl font-bold mb-4">My Dearest Love</h1>
          <p className="text-gray-600">A special message for your 22nd birthday</p>
        </div>

        <div className="glass-card rounded-xl p-8">
          <ScrollArea className="h-[400px] w-full pr-4">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Happy 22nd Birthday to the love of my life! 🎉🎈
              </p>

              <p>
                This is a love letter unlike the others that I've written. This one is special.
                This one is different.
              </p>

              <p>
                This is not a love letter describing how pretty you are or how much I love you. This is a love letter
                to that little girl who grew up in the strong, independent woman she is today. This is a letter to that
                cute, little girl in Riyadh who used to post dance tutorials on TikTok. This letter is also to that pro dancer woman who's performed live
                on stage in front of a huge audience and also in a venue as crazy as a baseball stadium.
                This letter is to that woman who's been through so much in life but still manages to smile and make others smile.
                This letter is to that woman who's achieved so much just at the age of 22, that sky's the limit for her.
              </p>

              <p>
                I couldn't have been more excited to be a part of your life. Every day as I've told you, I wake up with the goal of becoming the person who can keep you happy.
                All I want in life is to see you happy and smiling. I want to be the reason behind that smile. I want to be the person who can make you laugh when you're sad.
                I want to be the person who can make you feel loved when you're feeling lonely. I want to be the person who can make you feel special when you're feeling ordinary (which you never should because you're out of this world).
              </p>

              <p>
                All I'm saying is I want to do everything for you. So this letter is to that girl. To my little princess, the one who likes swinging, the one who likes dancing, the one who likes living life the right way. This is a letter to that girl who I'd never want to change and for whose happiness I'd do anything.
                This is a letter to the girl who's going to have everything she can ever dream of and I'm going to make sure of it.
                Keep swinging your way in life and I'll be there to catch you if you fall. Keep dancing your way through life and I'll be there to dance with you (or atleast try to). Keep living life the right way and I'll be there to make sure you never have to look back.
              </p>

              <p>
                I'd say things like thank you for being you or thank you for being born but I think I've said that enough. I think it's time to say thank you for being the best thing that ever happened to me. Thank you for being the reason I wake up every day. Thank you for being the reason I smile every day.
                Thank you for being the reason I'm happy every day. Thank you for being the most unexpectedly beautiful person that I could never even dream of coming across, let alone being with for the rest of my life.
                On this 22nd, I promise that we're going to be spending all your remaining birthdays together, no matter what!
                Whatever you do in life and wherever you go, I will always be there to support you, love you and take care of you my cutie pie!
              </p>

              <p className="font-serif text-xl text-primary">
                Happy Ayushi Day to the love of my life! 🎉🎈💕
              </p>

              <p className="text-right font-serif text-lg">
                With all my love,<br />
                Your babesie boo
              </p>
            </div>
          </ScrollArea>
        </div>
      </motion.div>
      <MusicButton />
    </div>
  );
};

export default SpecialMessage;
