import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Specification {
  id: any;
  country: any;
  language: any;
  targetGroup: any;
  cpi: any;
  loi: any;
  ir: any;
  completes: any;
}

interface ProjectInformation {
  projectName: string;
  workOrderNumber: string;
  projectType: string;
  category: string;
  client: string;
  clientContact: string;
  salesPerson: string;
  projectManager: string;
  projectDescription: string;
}

interface FilterOptions {
  gatesurvey: boolean;
  fraudDetection: boolean;
}

interface Devices {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

interface StateContextProps {
  selectedRegions: any[];
  specifications: Specification[];
  projectInformation: ProjectInformation;
  filterOptions: FilterOptions;
  devices: Devices;
  handleRegionChange: (region: any) => void;
  handleInputChange: (id: any, field: any, value: any) => void;
  handleProjectInfoChange: (field: any, value: any) => void;
  handleFilterOptionsChange: (field: any, value: any) => void;
  handleDevicesChange: (field: any, value: any) => void;
  handleCloneRow: (id: any) => void;
  handleRemoveRow: (id: any) => void;
}

const initialState: StateContextProps = {
  selectedRegions: [],
  specifications: [],
  projectInformation: {
    projectName: '',
    workOrderNumber: '',
    projectType: '',
    category: '',
    client: '',
    clientContact: '',
    salesPerson: '',
    projectManager: '',
    projectDescription: ''
  },
  filterOptions: {
    gatesurvey: false,
    fraudDetection: false
  },
  devices: {
    mobile: false,
    tablet: false,
    desktop: false
  },
  handleRegionChange: () => {},
  handleInputChange: () => {},
  handleProjectInfoChange: () => {},
  handleFilterOptionsChange: () => {},
  handleDevicesChange: () => {},
  handleCloneRow: () => {},
  handleRemoveRow: () => {},
};

const StateContext = createContext<StateContextProps>(initialState);

interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider = ({ children }: StateProviderProps) => {
  const [selectedRegions, setSelectedRegions] = useState<any[]>([]);
  const [specifications, setSpecifications] = useState<Specification[]>([]);
  const [projectInformation, setProjectInformation] = useState<ProjectInformation>(initialState.projectInformation);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>(initialState.filterOptions);
  const [devices, setDevices] = useState<Devices>(initialState.devices);

  const handleRegionChange = (region: any) => {
    if (selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.filter((r) => r !== region));
      setSpecifications(specifications.filter((spec) => spec.country !== region));
    } else {
      setSelectedRegions([...selectedRegions, region]);
      setSpecifications([...specifications, {
        id: Date.now(),
        country: region,
        language: 'Portuguese',
        targetGroup: '',
        cpi: '',
        loi: '',
        ir: '',
        completes: ''
      }]);
    }
  };

  const handleInputChange = (id: any, field: any, value: any) => {
    setSpecifications(specifications.map(spec =>
      spec.id === id ? { ...spec, [field]: value } : spec
    ));
  };

  const handleProjectInfoChange = (field: any, value: any) => {
    setProjectInformation({ ...projectInformation, [field]: value });
  };

  const handleFilterOptionsChange = (field: any, value: any) => {
    setFilterOptions({ ...filterOptions, [field]: value });
  };

  const handleDevicesChange = (field: any, value: any) => {
    setDevices({ ...devices, [field]: value });
  };

  const handleCloneRow = (id: any) => {
    const rowToClone = specifications.find(spec => spec.id === id);
    if (rowToClone) {
      const newRow = { ...rowToClone, id: Date.now() };
      setSpecifications([...specifications, newRow]);
    }
  };

  const handleRemoveRow = (id: any) => {
    setSpecifications(specifications.filter(spec => spec.id !== id));
  };

  return (
    <StateContext.Provider value={{
      selectedRegions,
      specifications,
      projectInformation,
      filterOptions,
      devices,
      handleRegionChange,
      handleInputChange,
      handleProjectInfoChange,
      handleFilterOptionsChange,
      handleDevicesChange,
      handleCloneRow,
      handleRemoveRow
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);