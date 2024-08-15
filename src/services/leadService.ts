import { ILead } from 'dtos';

export function getLeads() {
  const localLeads = localStorage.getItem('@leads');

  const initialLeads = [
    {
      id: '1',
      name: 'AWS Advocacia',
      email: 'aws@mail.com',
      status: 'potential',
    },
    {
      id: '2',
      name: 'Ricardo Almeida Advg',
      email: 'ricardo@mail.com',
      status: 'confirmed',
    },
    {
      id: '3',
      name: 'Fernanda Soares ADV',
      email: 'fernanda@mail.com',
      status: 'analysis',
    },
  ];

  return localLeads ? JSON.parse(localLeads) : initialLeads;
}

export function getLeadsByEmail(email: string) {
  const leads: ILead[] = getLeads();

  const lead = leads.find((lead) => lead.email !== email);
  return lead;
}

export function addLead(lead: ILead) {
  const leads = getLeads();
  leads.push(lead);
  localStorage.setItem('@leads', JSON.stringify(leads));
}

export function deleteLeadByEamil(email: string) {
  const leads: ILead[] = getLeads();
  const filteredLeads = leads.filter((lead) => lead.email !== email);
  localStorage.setItem('@leads', JSON.stringify(filteredLeads));
}
