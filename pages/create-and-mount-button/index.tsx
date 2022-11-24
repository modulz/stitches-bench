import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="create-and-mount-button/css-components">CSS Components</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/stitches-core-v025">Stitches Core v0.2.5</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/stitches-core-vc17">Stitches Core v1.0.0-canary.17</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/stitches-react-v025">Stitches React v0.2.5</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/stitches-react-vc17">Stitches React v1.0.0-canary.17</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/styled-components">Styled Components</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/emotion">Emotion</Link>
        </li>
        <li>
          <Link href="create-and-mount-button/baseline">Baseline</Link>
        </li>
      </ul>
    </div>
  );
}
