import './SectionHeader.css';

interface SectionHeaderProps {
  label: string;
  title: string;
  light?: boolean;
  goldDivider?: boolean;
}

export function SectionHeader({ label, title, light, goldDivider }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className={`section-label${light ? ' section-label--light' : ''}`}>{label}</p>
      <h2 className={`section-title${light ? ' section-title--light' : ''}`}>{title}</h2>
      <div className={`divider${goldDivider ? ' divider--gold' : ''}`} />
    </div>
  );
}
