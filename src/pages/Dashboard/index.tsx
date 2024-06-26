import React, { useCallback } from "react";
import { Layout, OrganizationCard } from "../../components";
import useOrganizationsStore from "../../stores/organizations";

const Dashboard: React.FC = () => {
  const { organizations } = useOrganizationsStore();

  const RenderOrganizations = useCallback(() => {
    return (
      <div className="flex w-full justify-evenly gap-16 min-w-16 overflow-x-auto p-2 md: max-w-full">
        {organizations?.map((organization) => (
          <OrganizationCard key={organization.id} organization={organization} />
        ))}
      </div>
    );
  }, [organizations]);

  return (
    <Layout>
      <h1 className="text-3xl text-gray-900 dark:text-gray-200 font-semibold mb-4">
        Welcome!
      </h1>
      <h2 className="text-2xl text-gray-700 dark:text-gray-300 mb-16">
        Select your organization and press the Notification's button to start
        exploring!
      </h2>
      <RenderOrganizations />
    </Layout>
  );
};

export default Dashboard;
