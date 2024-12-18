import React from "react";
import { SidebarTrigger } from "@/components/atoms/sidebar";
import { Separator } from "@/components/atoms/separator";
import { Breadcrumb, BreadcrumbList } from "@/components/atoms/breadcrumb";
import BreadcrumbItemComponent, {
  BreadcrumbDataType,
} from "@/components/atoms/breadcrumb-items";

type Props = {
  breadCrumbs: Array<BreadcrumbDataType>;
};

function PageHeader({ breadCrumbs }: Props) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadCrumbs.map((b, i, list) => (
              <BreadcrumbItemComponent
                key={`bc-c-${i}`}
                data={b}
                separator={i < list.length - 1}
              />
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}

export default PageHeader;
