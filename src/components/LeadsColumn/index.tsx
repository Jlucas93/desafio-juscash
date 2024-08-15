import { ILead } from 'dtos';
import React from 'react';

import LeadCard from '../LeadCards';
import { Column, ColumnTitle } from './styles';

interface ILeadColumnProps {
  title: string;
  leads: ILead[];
  onDrop: (event: React.DragEvent<HTMLDivElement>, column: string) => void;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, leadId: string) => void;
  setSelectedLead: (lead: ILead) => void;
}

export default function LeadColumn({
  title,
  leads,
  onDrop,
  onDragStart,
  setSelectedLead,
}: ILeadColumnProps) {
  return (
    <Column
      className="lead-column"
      onDrop={(event) => onDrop(event, title)}
      onDragOver={(event) => event.preventDefault()}
    >
      <ColumnTitle>{title}</ColumnTitle>
      <div className="cards-container">
        {leads.map((lead) => (
          <LeadCard
            key={lead.id}
            leadName={lead.name}
            lead={lead}
            onDragStart={onDragStart}
            setSelectedLead={setSelectedLead}
          />
        ))}
      </div>
    </Column>
  );
}
