export const getLeads = () => {
  const leads = localStorage.getItem('leads');
  return leads ? JSON.parse(leads) : [];
};

export const saveLead = (lead: any) => {
  const leads = getLeads();
  leads.push(lead);
  localStorage.setItem('leads', JSON.stringify(leads));
};

export const deleteLead = (id: string) => {
  const leads: any[] = getLeads();
  const filteredLeads = leads.filter((lead) => lead.id !== id);
  localStorage.setItem('leads', JSON.stringify(filteredLeads));
};
