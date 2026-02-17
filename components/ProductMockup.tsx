import React from 'react';
import { 
  LayoutGrid, 
  Clock, 
  CreditCard, 
  Building, 
  BarChart2, 
  FileText, 
  HelpCircle, 
  Settings,
  ChevronDown,
  UserPlus,
  Search
} from 'lucide-react';

export const ProductMockup: React.FC = () => {
  return (
    <div className="w-[900px] h-[640px] bg-brand-panel border border-brand-border rounded-lg shadow-xl overflow-hidden flex flex-row relative font-sans transition-colors duration-0">
      
      {/* Sidebar */}
      <div className="w-[260px] border-r border-brand-border bg-brand-surface flex flex-col pt-8 pb-4 transition-colors duration-0">
        {/* Brand */}
        <div className="px-6 mb-8">
          <h2 className="text-brand-contrast font-medium text-[15px] tracking-wide">Aueik</h2>
        </div>

        {/* Search */}
        <div className="px-5 mb-8">
            <div className="relative group">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full bg-brand-base border border-brand-border rounded-[2px] text-[13px] py-2.5 px-3 pl-4 text-brand-contrast focus:outline-none focus:border-brand-contrast/20 transition-colors placeholder:text-brand-muted/50"
                />
            </div>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto px-4 space-y-1">
           <SidebarItem icon={<LayoutGrid size={16} />} label="Dashboard" />
           <SidebarItem icon={<UserPlus size={16} />} label="Hiring" />
           <SidebarItem icon={<Clock size={16} />} label="Time & Attendance" active />
           <SidebarItem icon={<CreditCard size={16} />} label="Payroll" />
           <SidebarItem icon={<Building size={16} />} label="Company" />
           <SidebarItem icon={<BarChart2 size={16} strokeWidth={2.5} />} label="Perfomances" />
           <SidebarItem icon={<FileText size={16} />} label="Reports" />
        </div>

        {/* Bottom Menu */}
        <div className="px-4 mt-6 space-y-1">
             <div className="px-3 py-3 text-[11px] text-brand-muted font-medium uppercase tracking-wider">Others</div>
             <SidebarItem icon={<HelpCircle size={16} />} label="Help Center" />
             <SidebarItem icon={<Settings size={16} />} label="Settings" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-brand-panel flex flex-col relative transition-colors duration-0">
          
          {/* Header */}
          <div className="pt-10 px-10 pb-6">
             <h1 className="text-[19px] text-brand-contrast font-normal mb-6 tracking-wide">Workflows</h1>
             
             {/* Search Workflow Input */}
             <div className="w-full max-w-[340px]">
                 <input 
                    type="text" 
                    placeholder="Search Workflow" 
                    className="w-full bg-brand-surface border border-brand-border rounded-[2px] text-[13px] py-3 px-4 text-brand-contrast placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-contrast/20 transition-colors"
                 />
             </div>
          </div>

          {/* Table */}
          <div className="flex-1 px-10 overflow-hidden">
             <table className="w-full text-left border-collapse">
                <thead>
                   <tr className="text-[10px] text-brand-muted/70 uppercase tracking-[0.1em] border-b border-brand-border font-semibold">
                      <th className="py-4 font-normal w-[30%] pl-0">Name</th>
                      <th className="py-4 font-normal w-[25%]">Date Employed</th>
                      <th className="py-4 font-normal w-[20%]">Work</th>
                      <th className="py-4 font-normal w-[15%]">Sick Leave</th>
                   </tr>
                </thead>
                <tbody className="text-[12px] text-brand-muted">
                    <TableRow 
                        name="Esther Howard" 
                        role="UI/UX Designer" 
                        date="January 1, 2015" 
                        hours="120 Hours" 
                        leave="2 Days" 
                    />
                    <TableRow 
                        name="James Johnson" 
                        role="Frontend Developer" 
                        date="February 20, 2015" 
                        hours="140 Hours" 
                        leave="4 Days" 
                    />
                    <TableRow 
                        name="Wade Warren" 
                        role="Graphic Designer" 
                        date="February 20, 2015" 
                        hours="141 Hours" 
                        leave="1 Day" 
                    />
                    <TableRow 
                        name="Guy Hawkins" 
                        role="QA Engineer" 
                        date="March 1, 2015" 
                        hours="120 Hours" 
                        leave="5 Days" 
                    />
                    <TableRow 
                        name="Jacob Jones" 
                        role="Frontend Developer" 
                        date="March 20, 2015" 
                        hours="130 Hours" 
                        leave="-" 
                    />
                    <TableRow 
                        name="Jenny Wilson" 
                        role="Senior HR" 
                        date="July 1, 2016" 
                        hours="120 Hours" 
                        leave="-" 
                    />
                    <TableRow 
                        name="Esther Howard" 
                        role="QA Engineer" 
                        date="July 1, 2016" 
                        hours="122 Hours" 
                        leave="2 Days" 
                    />
                    <TableRow 
                        name="Albert Flores" 
                        role="UI/UX Designer" 
                        date="Aug 20, 2016" 
                        hours="125 Hours" 
                        leave="1 Day" 
                    />
                    <TableRow 
                        name="Ronald Richards" 
                        role="UX Designer" 
                        date="February 20, 2017" 
                        hours="137 Hours" 
                        leave="2 Days" 
                    />
                    <TableRow 
                        name="Kristin Watson" 
                        role="Product Designer" 
                        date="February 20, 2017" 
                        hours="140 Hours" 
                        leave="4 Days" 
                    />
                </tbody>
             </table>
             
             {/* Pagination / Footer of Table */}
             <div className="flex items-center mt-5 text-[10px] text-brand-muted pl-0 font-sans tracking-wide">
                 <span>Show result: </span>
                 <div className="ml-2 bg-brand-surface border border-brand-border px-2 py-1 rounded-[2px] text-brand-contrast flex items-center cursor-pointer">
                    10 <ChevronDown size={10} className="ml-1 opacity-60" />
                 </div>
             </div>
          </div>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex items-center gap-4 px-3 py-3 rounded-[4px] cursor-pointer transition-all duration-200 group relative ${active ? 'bg-brand-panel shadow-sm border border-brand-border' : 'text-brand-muted hover:text-brand-contrast hover:bg-brand-contrast/[0.03]'}`}>
    {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-[#F4A261] rounded-r"></div>}
    <div className={`${active ? 'text-brand-contrast' : 'text-brand-muted group-hover:text-brand-contrast'} transition-colors`}>
      {icon}
    </div>
    <span className={`text-[13px] font-medium tracking-wide ${active ? 'text-brand-contrast' : ''}`}>{label}</span>
  </div>
);

const TableRow: React.FC<{ name: string; role: string; date: string; hours: string; leave: string }> = ({ name, role, date, hours, leave }) => (
  <tr className="border-b border-brand-border group hover:bg-brand-contrast/[0.02] transition-colors last:border-0">
    <td className="py-3.5 pl-0">
        <div className="text-brand-contrast font-medium text-[12px] tracking-wide mb-0.5">{name}</div>
        <div className="text-[10px] text-brand-muted/70 tracking-wide font-medium">{role}</div>
    </td>
    <td className="py-3.5 text-brand-muted text-[12px] tracking-wide">{date}</td>
    <td className="py-3.5 text-brand-muted text-[12px] tracking-wide">{hours}</td>
    <td className="py-3.5 text-brand-muted text-[12px] tracking-wide">{leave}</td>
  </tr>
);