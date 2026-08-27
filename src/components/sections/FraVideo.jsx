// File: src/components/sections/FraVideo.jsx

import React from "react";
import { useInView } from "react-intersection-observer";
import { FaPlayCircle } from "react-icons/fa";

import {
  Section,
  SectionTitle,
  LeadParagraph,
  VideoFrame,
  VideoFramePlaceholder,
  VideoCaption
} from "../styles";

const VIDEO_ID = "d6lyGmjHqSs";
const WATCH_URL = `https://youtu.be/${VIDEO_ID}`;

// Muted autoplay is what browsers allow without a user gesture, so the clip
// starts on its own the first time the section scrolls into view.
const EMBED_SRC =
  `https://www.youtube.com/embed/${VIDEO_ID}` +
  `?autoplay=1&mute=1&playsinline=1&rel=0`;

const FraVideo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Mount the player once, then leave it alone
    threshold: 0.35,   // Wait until the frame is comfortably on screen
  });

  return (
    <Section id="fra-video">
      <SectionTitle>See Fall Risk Assessment in Action</SectionTitle>
      <LeadParagraph style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem auto" }}>
        A short look at how the FRA program predicts fall risk, improves patient
        care, and strengthens practice performance.
      </LeadParagraph>

      <VideoFrame ref={ref}>
        {inView ? (
          <iframe
            src={EMBED_SRC}
            title="Fall Risk Assessment | Predict Fall Risk, Improve Patient Care & Practice Performance"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            /* YouTube identifies the embedding site from the Referer header.
               Without this the player can refuse to load with "Error 153". */
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <VideoFramePlaceholder aria-hidden="true">
            <FaPlayCircle />
          </VideoFramePlaceholder>
        )}
      </VideoFrame>

      <VideoCaption>
        Plays muted automatically. Use the player controls for sound.{" "}
        <a href={WATCH_URL} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
        .
      </VideoCaption>
    </Section>
  );
};

export default FraVideo;
