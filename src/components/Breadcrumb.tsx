import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    path: string;
}

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    // Map paths to readable labels
    const pathToLabel: Record<string, string> = {
        "": "Home",
        "about": "About Us",
        "erp-solutions": "ERP Solutions",
        "attendance-system": "Attendance System",
        "features": "Features",
        "contact": "Contact Us",
        "faq": "FAQ",
        "careers": "Careers",
        "job-search": "Job Search",
        "saved-jobs": "Saved Jobs",
        "access-application": "Access Application",
        "who-we-are": "Who We Are",
        "life-at-my-vidyon": "Life at My Vidyon",
        "how-we-hire": "How We Hire",
    };

    const breadcrumbs: BreadcrumbItem[] = [
        { label: "Home", path: "/" },
    ];

    let currentPath = "";
    pathnames.forEach((segment) => {
        currentPath += `/${segment}`;
        breadcrumbs.push({
            label: pathToLabel[segment] || segment,
            path: currentPath,
        });
    });

    // Don't show breadcrumbs on homepage
    if (pathnames.length === 0) {
        return null;
    }

    return (
        <nav aria-label="Breadcrumb" className="py-4 border-b border-border/50">
            <div className="container-custom">
                <ol className="flex items-center gap-2 text-sm flex-wrap">
                    {breadcrumbs.map((crumb, index) => {
                        const isLast = index === breadcrumbs.length - 1;

                        return (
                            <li key={crumb.path} className="flex items-center gap-2">
                                {index > 0 && (
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                )}
                                {isLast ? (
                                    <span className="text-foreground font-medium" aria-current="page">
                                        {crumb.label}
                                    </span>
                                ) : (
                                    <Link
                                        to={crumb.path}
                                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                        {index === 0 && <Home className="w-4 h-4" />}
                                        {crumb.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumb;
