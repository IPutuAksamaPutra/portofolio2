type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-14 text-center">
      {subtitle && (
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
}