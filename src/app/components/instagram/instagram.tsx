"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface InstagramTypes {
  id: string;
  media_type: "IMAGE" | "VIDEO";
  media_url: string;
  permalink: string;
}
export default function Instagram() {
  const [feedList, setFeedList] = useState<InstagramTypes[]>([]);

  async function InstaFeed() {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
    const fields = "media_url,media_type, permalink";
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;

    const { data } = await axios.get(url);

    setFeedList(data.data);
  }

  useEffect(() => {
    InstaFeed();
  }, []);

  return (
    <section className="w-full h-auto flex flex-col items-center justify-cente gap-5 py-5">
      <div className="w-row  h-auto flex flex-col">
        <text className="font-medium text-lg">Instagram</text>
      </div>
      <div className="w-row h-auto flex items-center gap-3">
        <img src={"./pneufree.jpg"} className="w-14 rounded-full shadow-sm" />
        <text className="text-green-pz-2 font-medium text-lg">Pneufreecom</text>
      </div>
      <div className="w-row h-auto flex overflow-x-scroll pb-2 gap-4">
        {feedList.map((item) => (
          <a key={item.id} href={item.permalink} target="_blank">
            {item.media_type === "IMAGE" ? (
              <img
                className="min-w-56 min-h-56 rounded-xl"
                src={item.media_url}
              />
            ) : (
              <video className="min-w-56 min-h-56 rounded-xl" controls autoPlay>
                <source src={item.media_url} />
              </video>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
