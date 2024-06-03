interface PorpsTitleNews {
  title: string;
  size: string;
  weight: string;
  color: string | null | undefined;
}

export default function TitleNews({
  title,
  size,
  weight,
  color,
}: PorpsTitleNews) {
  console.log(title, size, weight, color);
  return (
    <div className={`font-Roboto ${size} ${weight} ${color} text-black`}>{title}</div>
  );
}
