import { ILead } from 'dtos';

export function getLeads() {
  const localLeads = localStorage.getItem('@leads');

  return localLeads ? JSON.parse(localLeads) : [];
}

export function getLeadsByEmail(email: string) {
  const leads: ILead[] = getLeads();

  const lead = leads.find((lead) => lead.email === email);

  if (!lead) {
    return null;
  }

  return lead;
}

export function addLead(lead: ILead) {
  const leads = getLeads();
  leads.push(lead);
  localStorage.setItem('@leads', JSON.stringify(leads));
}

export function updateLead({ lead, email }: { lead: ILead; email: string }) {
  const leads: ILead[] = getLeads();

  const leadIndex = leads.findIndex((lead) => lead.email === email);

  if (leadIndex !== -1) {
    leads[leadIndex] = lead;
    localStorage.setItem('@leads', JSON.stringify(leads));
  }
}

export function deleteLeadByEmail(email: string) {
  const leads: ILead[] = getLeads();
  const filteredLeads = leads.filter((lead) => lead.email !== email);
  localStorage.setItem('@leads', JSON.stringify(filteredLeads));
}
