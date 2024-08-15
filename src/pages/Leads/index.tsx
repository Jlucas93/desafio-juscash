import LeadHeader from 'components/LeadHedaer';
import LeadModal from 'components/LeadModal';
import LeadColumn from 'components/LeadsColumn';
import { ILead } from 'dtos';
import React, { useEffect, useState } from 'react';
import { getLeads } from 'services/leadService';

import { Container, LeadsBoard } from './styles';

const statusOrder = ['potential', 'confirmed', 'analysis'];

export function Leads() {
  const [leads, setLeads] = useState<ILead[]>([]);
  const [selectedLead, setSelectedLead] = useState<ILead | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [draggedLead, setDraggedLead] = useState<{
    id: string;
    status: string;
  } | null>(null);

  function handleDragStart(
    event: React.DragEvent<HTMLDivElement>,
    leadId: string,
  ) {
    const lead = leads.find((lead) => lead.id === leadId);
    if (lead) {
      event.dataTransfer.setData('text/plain', leadId);
      setDraggedLead(lead);
    }
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>,
    targetStatus: string,
  ) {
    event.preventDefault();
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
  }

  function fetchLeads() {
    setLeads(getLeads());
  }

  function handleAddLead() {
    fetchLeads();
    setSelectedLead(null);
  }

  function handleSelectedLead(lead: ILead) {
    setSelectedLead(lead);
    setOpenModal(true);
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <Container>
      <LeadHeader handleAddLead={() => handleAddLead()} />
      <LeadsBoard>
        <LeadColumn
          title="Cliente Potencial"
          leads={leads.filter((lead) => lead.status === 'potential')}
          onDrop={(e) => handleDrop(e, 'potential')}
          onDragStart={handleDragStart}
          setSelectedLead={(lead) => handleSelectedLead(lead)}
        />
        <LeadColumn
          title="Dados Confirmados"
          leads={leads.filter((lead) => lead.status === 'confirmed')}
          onDrop={(e) => handleDrop(e, 'confirmed')}
          onDragStart={handleDragStart}
          setSelectedLead={(lead) => handleSelectedLead(lead)}
        />
        <LeadColumn
          title="Análise do Lead"
          leads={leads.filter((lead) => lead.status === 'analysis')}
          onDrop={(e) => handleDrop(e, 'analysis')}
          onDragStart={handleDragStart}
          setSelectedLead={(lead) => handleSelectedLead(lead)}
        />
      </LeadsBoard>

      {openModal && selectedLead ? (
        <LeadModal
          lead={selectedLead}
          isModalOpen={openModal}
          handleAddLead={() => handleAddLead()}
          closeModal={() => setOpenModal(false)}
        />
      ) : null}
    </Container>
  );
}
