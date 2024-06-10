import React from "react";
import useOrganizationsStore from "../../stores/organizations";

type OrganizationCardProps = {
  organization: Organization;
};

const OrganizationCard: React.FC<OrganizationCardProps> = ({
  organization,
}) => {
  const { selectedOrganization, setSelectedOrganization } =
    useOrganizationsStore();

  return (
    <div
      data-cy={`organization-card-${organization.id}${
        selectedOrganization.id === organization.id ? "-selected" : ""
      }`}
      onClick={() => setSelectedOrganization(organization)}
      className={`flex flex-1 border-2 border-gray-700 dark:border-gray-200 h-20 w-40 rounded-md justify-center items-center text-gray-700 dark:text-gray-200 text-lg cursor-pointer ${
        selectedOrganization?.id === organization.id &&
        "bg-blue-300 dark:bg-slate-600"
      } transform duration-200`}
    >
      {organization.name}
    </div>
  );
};

export default OrganizationCard;
