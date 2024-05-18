interface Job {
  agency: string;
  title: string;
  occupational_category: string;
  salary_range: {
    type: string;
    low: string;
    high: string;
  };
  employment_type: string;
  hours_per_week: string;
  from: string;
  to: string;
  county: string;
  street_address: string;
  city: string;
  state: string;
  zip_code: string;
  minimum_qualifications: string;
  duties_description: string;
  name: string;
  telephone: string;
  email_address: string;
  notes_on_applying: string;
  date: string;
  vacancy_id: string;
  url: string;
}
