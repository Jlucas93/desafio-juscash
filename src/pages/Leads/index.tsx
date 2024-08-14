import LeadHeader from 'components/LeadHedaer';
import LeadColumn from 'components/LeadsColumn';
import React, { useState } from 'react';

import { LeadsBoard } from './styles';

const initialLeads = [
  { id: '1', name: 'AWS Advocacia', status: 'potential' },
  { id: '2', name: 'Ricardo Almeida Advg', status: 'confirmed' },
  { id: '3', name: 'Fernanda Soares ADV', status: 'analysis' },
];

const statusOrder = ['potential', 'confirmed', 'analysis'];

export function Leads() {
  const [leads, setLeads] = useState(initialLeads);
  const [draggedLead, setDraggedLead] = useState<{
    id: string;
    status: string;
  } | null>(null);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    leadId: string,
  ) => {
    const lead = leads.find((lead) => lead.id === leadId);
    if (lead) {
      event.dataTransfer.setData('text/plain', leadId);
      setDraggedLead(lead);
    }
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetStatus: string,
  ) => {
    e.preventDefault();
    if (draggedLead) {
      const currentIndex = statusOrder.indexOf(draggedLead.status);
      const targetIndex = statusOrder.indexOf(targetStatus);

      if (
        targetIndex === -1 ||
        currentIndex === -1 ||
        targetIndex < currentIndex ||
        (draggedLead.status === 'potential' && targetStatus === 'analysis')
      ) {
        return;
      }

      setLeads((prevLeads) =>
        prevLeads.map((lead) =>
          lead.id === draggedLead.id ? { ...lead, status: targetStatus } : lead,
        ),
      );
      setDraggedLead(null);
    }
  };

  return (
    <>
      <LeadHeader />
      <LeadsBoard>
        <LeadColumn
          title="Cliente Potencial"
          leads={leads.filter((lead) => lead.status === 'potential')}
          onDrop={(e) => handleDrop(e, 'potential')}
          onDragStart={handleDragStart}
        />
        <LeadColumn
          title="Dados Confirmados"
          leads={leads.filter((lead) => lead.status === 'confirmed')}
          onDrop={(e) => handleDrop(e, 'confirmed')}
          onDragStart={handleDragStart}
        />
        <LeadColumn
          title="Análise do Lead"
          leads={leads.filter((lead) => lead.status === 'analysis')}
          onDrop={(e) => handleDrop(e, 'analysis')}
          onDragStart={handleDragStart}
        />
      </LeadsBoard>
    </>
  );
}
