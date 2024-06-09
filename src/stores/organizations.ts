import { create } from "zustand";
import { testOrganizations } from "../constants";

const INITIAL_STATE = {
  organizations: testOrganizations,
  selectedOrganization: testOrganizations[0],
};

type OrganizationStoreState = {
  organizations: Organization[] | null;
  selectedOrganization: Organization;
  setSelectedOrganization: (organization: Organization) => void;
  clear: void;
};

const useOrganizationsStore = create<OrganizationStoreState>((set, get) => ({
  organizations: testOrganizations,
  selectedOrganization: testOrganizations[0],
  setSelectedOrganization: (organization) => {
    set({ selectedOrganization: organization });
  },
  clear: set(INITIAL_STATE),
}));

export default useOrganizationsStore;
