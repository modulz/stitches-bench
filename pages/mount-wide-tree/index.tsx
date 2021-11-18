import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="mount-wide-tree/stitches-react-v125">Stitches React v0.2.5</Link>
        </li>
        <li>
          <Link href="mount-wide-tree/stitches-react-vc126">Stitches React v1.0.0-canary.17</Link>
        </li>
        <li>
          <Link href="mount-wide-tree/styled-components">Styled components</Link>
        </li>
        <li>
          <Link href="mount-wide-tree/emotion">Emotion</Link>
        </li>
      </ul>
    </div>
  );
}
