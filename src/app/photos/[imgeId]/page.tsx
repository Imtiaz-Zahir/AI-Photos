"use server";
import React from "react";
import Image from "next/image";
import { getImages } from "@/services/imageService";

export default async function page({ params }: { params: { imgeId: string } }) {
  return (
    <section className="w-[95vw] mx-auto mt-20 flex flex-col lg:flex-row gap-10">
      <div
        className="lg:w-3/4 flex flex-col items-center justify-center"
        style={{ maxHeight: "calc(100vh - 100px)" }}
      >
          {/* <Image
            src="/creations/anime-tree-illustration.jpg"
            // style={{ maxHeight: "100%", maxWidth: "100%" }}
            height={1000}
            width={100}
            // fill={true}
            alt="image"
          /> */}
        <img
          src="/hero.jpg"
          className="max-w-full max-h-full"
          alt=""
        />

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est amet,
          tenetur ducimus eaque non neque! Soluta voluptas ducimus nulla amet
          voluptatibus, et omnis ab quae aspernatur, error, neque sequi sed!
        </p>
      </div>
      <div className="lg:w-1/4">
        <label className="ml-5">AD</label>
        <div className="flex items-center justify-center mb-7"></div>
        <button className="bg-green-800 py-3 w-full rounded flex items-center justify-center gap-1 text-white text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
            fill="#F5F5F5"
          >
            <g data-name="Layer 2">
              <g data-name="download">
                <rect width="16" height="2" x="4" y="18" rx="1" ry="1"></rect>
                <rect
                  width="4"
                  height="2"
                  x="3"
                  y="17"
                  rx="1"
                  ry="1"
                  transform="rotate(-90 5 18)"
                ></rect>
                <rect
                  width="4"
                  height="2"
                  x="17"
                  y="17"
                  rx="1"
                  ry="1"
                  transform="rotate(-90 19 18)"
                ></rect>
                <path d="M12 15a1 1 0 0 1-.58-.18l-4-2.82a1 1 0 0 1-.24-1.39 1 1 0 0 1 1.4-.24L12 12.76l3.4-2.56a1 1 0 0 1 1.2 1.6l-4 3a1 1 0 0 1-.6.2z"></path>
                <path d="M12 13a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1z"></path>
              </g>
            </g>
          </svg>
          DOWNLOAD
        </button>
      </div>
    </section>
  );
}
