/**
 * TypeScript Declaration File for MDX
 *
 * This file tells TypeScript how to handle MDX files.
 * It allows you to import .mdx files as React components.
 *
 * Without this file, TypeScript wouldn't know what to do with:
 *   import MyContent from './content/article.mdx'
 */

import type { MDXComponents } from "mdx/types";

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module "mdx/types" {
  interface MDXComponents {
    // You can add custom component types here if needed
    [key: string]: React.ComponentType<any> | undefined;
  }
}
