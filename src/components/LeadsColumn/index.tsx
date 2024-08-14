import React from 'react';

import LeadCard from '../LeadCards';
import { Column, ColumnTitle } from './styles';
interface ILeadColumnProps {
  title: string;
  leads: { id: string; name: string }[];
  onDrop: (event: React.DragEvent<HTMLDivElement>, column: string) => void;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, leadId: string) => void;
}

export default function LeadColumn({
  title,
  leads,
  onDrop,
  onDragStart,
}: ILeadColumnProps) {
  return (
    <Column
      className="lead-column"
      onDrop={(event) => onDrop(event, title)}
      onDragOver={(event) => event.preventDefault()}
    >
      <ColumnTitle>{title}</ColumnTitle>
      {leads.map((lead) => (
        <LeadCard
          key={lead.id}
          leadName={lead.name}
          leadId={lead.id}
          onDragStart={onDragStart}
        />
      ))}
    </Column>
  );
}
