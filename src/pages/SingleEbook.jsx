import React, { useState } from "react";

const SingleEbook = () => {
  const [open, setOpen] = useState(null);

  const toggleDropdown = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-blue-700 text-white flex justify-center p-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-2xl font-bold mb-4">Foundation module - £15</h1>

        <p className="mb-4">
          <strong>About the module:</strong>
          <br />
          The foundation module offers an overview of Beyond Words and will
          develop your confidence in how to get the most out of our series of
          word-free picture stories.
        </p>

        <p className="mb-4">
          You will learn simple but powerful techniques to support people who
          read our stories - people who have questions, concerns or fears about a
          wide range of life challenges and people who just want to share their
          thoughts with others and have fun.
        </p>

        <p className="mb-6">
          You will learn how to support one person on their own, as well as how
          to work with a group. See course overview below.
        </p>

        {/* Dropdown Sections */}
        <div className="space-y-4">
          {/* Session 1 */}
          <div className="bg-blue-600 rounded-lg shadow p-4">
            <button
              className="w-full text-left font-semibold"
              onClick={() => toggleDropdown(1)}
            >
              Session 1: Understanding visual literacy
            </button>
            {open === 1 && (
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Why read using pictures?</li>
                <li>What is Visual Literacy and what are the benefits?</li>
                <li>The Layered Reading Approach</li>
              </ul>
            )}
          </div>

          {/* Session 2 */}
          <div className="bg-blue-600 rounded-lg shadow p-4">
            <button
              className="w-full text-left font-semibold"
              onClick={() => toggleDropdown(2)}
            >
              Session 2: Supporting your readers
            </button>
            {open === 2 && (
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>Supporting one reader</li>
                <li>Supporting a group of readers</li>
                <li>Top Tips for supporting your readers</li>
              </ul>
            )}
          </div>

          {/* Session 3 */}
          <div className="bg-blue-600 rounded-lg shadow p-4">
            <button
              className="w-full text-left font-semibold"
              onClick={() => toggleDropdown(3)}
            >
              Session 3: Choosing a story to read
            </button>
            {open === 3 && (
              <ul className="list-disc list-inside mt-2 text-sm">
                <li>The benefits of different resources and formats</li>
              </ul>
            )}
          </div>
        </div>

        {/* Extra Info */}
        <p className="mt-6 text-sm">
          The online part of the course will take about an hour, including
          listening to the videos. You need to allow extra time for trying out
          the exercises and making your own reflective notes. You do not need to
          complete the course all at once, it will remember where you left off,
          and it will let you start again from the same place.
        </p>

        <p className="mt-4 font-semibold">
          This module also includes a FREE download of our ebook, Belonging.
        </p>
      </div>
    </div>
  );
};

export default SingleEbook;
