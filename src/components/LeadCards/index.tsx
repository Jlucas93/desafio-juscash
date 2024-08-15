import { ILead } from 'dtos';
import React from 'react';

import { Card } from './styles';

interface ILeadCardProps {
  leadName: string;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, leadId: string) => void;
  lead: ILead;
  setSelectedLead: (lead: ILead) => void;
}

export default function LeadCard({
  leadName,
  onDragStart,
  lead,
  setSelectedLead,
}: ILeadCardProps) {
  return (
    <Card
      draggable
      onDragStart={(event) => onDragStart(event, lead.id)}
      className="lead-card"
      onClick={() => setSelectedLead(lead)}
    >
      {leadName}
    </Card>
  );
}
