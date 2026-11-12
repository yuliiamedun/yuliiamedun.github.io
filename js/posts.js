// Blog posts. Newest first is not required: posts are sorted by date.
// To add a post, copy an object below and edit it.
//   slug:    used in the URL (blog.html?post=slug). Lowercase, hyphens, no spaces.
//   date:    YYYY-MM-DD
//   summary: one or two sentences shown in the list
//   body:    Markdown-like text. Supported: # and ## headings, paragraphs,
//            - bullet lists, 1. numbered lists, **bold**, *italic*, `code`,
//            [links](https://example.com) and ``` code blocks.

window.POSTS = [
  // TODO: placeholder post. Edit or replace it with your first real post.
  {
    slug: "hello-world",
    title: "Why I chose PID over reinforcement learning",
    date: "2026-11-12",
    summary: "A short note on picking the simpler controller for root tip inoculation, and what that taught me.",
    body: `
TODO: Write your post here. This is placeholder text.

## The problem

In the NPEC project, a simulated robot had to move a pipette to root tips found by a **U-Net** segmentation model.

## What I tried

- A PPO reinforcement learning agent
- A classic PID controller

## What I learned

The simpler method was more reliable for this task. Write about *why* here.

Find the code on [GitHub](https://github.com/YOUR-GITHUB-USERNAME).
`,
  },
];
