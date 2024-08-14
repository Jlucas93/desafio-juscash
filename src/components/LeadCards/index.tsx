import React from 'react';

import { Card } from './styles';

interface ILeadCardProps {
  leadName: string;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, leadId: string) => void;
  leadId: string;
}

export default function LeadCard({
  leadName,
  onDragStart,
  leadId,
}: ILeadCardProps) {
  return (
    <Card
      draggable
      onDragStart={(event) => onDragStart(event, leadId)}
      className="lead-card"
    >
      {leadName}
    </Card>
  );
}
