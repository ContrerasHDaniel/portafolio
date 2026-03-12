export interface TimelineItem {
    date: string;
    image?: string;
    company: string;
    position: string;
    icon: string;
    iconBg: string;
    points: string[];
}

export interface ContactFormData {
    name: string;
    company?: string;
    email: string;
    phone?: string;
    message: string;
}