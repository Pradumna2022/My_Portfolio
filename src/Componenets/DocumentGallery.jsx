import React, { useState, useEffect } from "react"
import {
    FileText,
    Download,
    Search,
    Calendar,
    Filter,
    Award,
    DollarSign,
    FileCheck,
    UserCheck,
    Briefcase,
    GraduationCap,
    Grid3X3,
    List,
    Eye,
} from "lucide-react"

// Mock document data - replace with your actual documents
const documents = [
    {
        id: 1,
        title: "Senior Software Developer Certificate",
        description:
            "Experience certificate from TechCorp Inc. highlighting 3 years of full-stack development experience with React, Node.js, and cloud technologies.",
        category: "experience",
        type: "Experience Certificate",
        date: "2024-01-15",
        size: "2.4 MB",
        format: "PDF",
        downloadUrl: "#",
        tags: ["React", "Node.js", "Full Stack", "3 Years"],
    },
    {
        id: 2,
        title: "December 2023 Salary Slip",
        description:
            "Monthly salary statement including basic pay, allowances, deductions, and net salary details for December 2023.",
        category: "salary",
        type: "Salary Slip",
        date: "2023-12-31",
        size: "1.2 MB",
        format: "PDF",
        downloadUrl: "#",
        tags: ["December 2023", "Monthly", "Payroll"],
    },
    {
        id: 3,
        title: "Form 16 - FY 2022-23",
        description:
            "Annual TDS certificate showing tax deducted at source, total income, and tax liability for financial year 2022-23.",
        category: "tax",
        type: "TDS Certificate",
        date: "2023-06-15",
        size: "1.8 MB",
        format: "PDF",
        downloadUrl: "#",
        tags: ["Form 16", "Annual", "Tax", "2022-23"],
    },
    {
        id: 4,
        title: "Joining Letter - TechCorp Inc.",
        description:
            "Official joining letter with terms of employment, designation, salary structure, and company policies.",
        category: "joining",
        type: "Joining Letter",
        date: "2021-03-01",
        size: "1.5 MB",
        format: "PDF",
        downloadUrl: "#",
        tags: ["TechCorp", "Employment", "Terms"],
    },
    {
        id: 5,
        title: "Updated Resume 2024",
        description:
            "Latest professional resume showcasing 4+ years of software development experience, technical skills, and project achievements.",
        category: "resume",
        type: "Resume",
        date: "2024-02-10",
        size: "0.8 MB",
        format: "PDF",
        downloadUrl: "#",
        tags: ["Latest", "4+ Years", "Software Developer"],
    },
    {
        id: 6,
        title: "React.js Certification",
        description:
            "Professional certification in React.js development from Meta, covering advanced concepts, hooks, and state management.",
        category: "certification",
        type: "Professional Certificate",
        date: "2023-09-20",
        size: "2.1 MB",
        format: "PDF",
        downloadUrl: "#",
        tags: ["React.js", "Meta", "Advanced"],
    },
    {
        id: 7,
        title: "November 2023 Salary Slip",
        description:
            "Monthly salary statement with detailed breakdown of earnings, deductions, and benefits for November 2023.",
        category: "salary",
        type: "Salary Slip",
        date: "2023-11-30",
        size: "1.1 MB",
        format: "PDF",
        downloadUrl: "#",
        tags: ["November 2023", "Monthly", "Detailed"],
    },
    {
        id: 8,
        title: "AWS Cloud Practitioner Certificate",
        description:
            "Amazon Web Services Cloud Practitioner certification demonstrating foundational cloud computing knowledge and AWS services expertise.",
        category: "certification",
        type: "Cloud Certificate",
        date: "2023-08-12",
        size: "1.9 MB",
        format: "PDF",
        downloadUrl: "#",
        tags: ["AWS", "Cloud", "Foundational"],
    },
]

// Derive categories with counts dynamically from documents
const getCategories = (docs) => [
    { id: "all", label: "All Documents", icon: FileText, count: docs.length },
    {
        id: "experience",
        label: "Experience",
        icon: Briefcase,
        count: docs.filter((d) => d.category === "experience").length,
    },
    {
        id: "salary",
        label: "Salary Slips",
        icon: DollarSign,
        count: docs.filter((d) => d.category === "salary").length,
    },
    {
        id: "tax",
        label: "TDS Files",
        icon: FileCheck,
        count: docs.filter((d) => d.category === "tax").length,
    },
    {
        id: "joining",
        label: "Joining Letters",
        icon: UserCheck,
        count: docs.filter((d) => d.category === "joining").length,
    },
    {
        id: "resume",
        label: "Resume",
        icon: Award,
        count: docs.filter((d) => d.category === "resume").length,
    },
    {
        id: "certification",
        label: "Certifications",
        icon: GraduationCap,
        count: docs.filter((d) => d.category === "certification").length,
    },
]

export default function DocumentGallery() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [sortBy, setSortBy] = useState("date")
    const [viewMode, setViewMode] = useState("grid") // "grid" or "list"
    const calculateExperienceInYears = () => {
        const joiningDate = new Date("2022-04-01");
        const currentDate = new Date();
        let years = currentDate.getFullYear() - joiningDate.getFullYear();

        // Adjust if the current date is before the anniversary of the joining date
        const hasNotCompletedYear =
            currentDate.getMonth() < joiningDate.getMonth() ||
            (currentDate.getMonth() === joiningDate.getMonth() && currentDate.getDate() < joiningDate.getDate());

        if (hasNotCompletedYear) {
            years -= 1;
        }

        return years;
    };
    const categories = getCategories(documents);


    // Filter and sort documents - useMemo to optimize if document list grows large
    const filteredDocuments = React.useMemo(() => {
        return documents
            .filter((doc) => {
                const matchesSearch =
                    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    doc.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
                const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory
                return matchesSearch && matchesCategory
            })
            .sort((a, b) => {
                if (sortBy === "date") {
                    return new Date(b.date) - new Date(a.date)
                } else if (sortBy === "title") {
                    return a.title.localeCompare(b.title)
                }
                return 0
            })
    }, [searchTerm, selectedCategory, sortBy, documents]); // Add documents to dependency array

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    const getCategoryIcon = (category) => {
        const categoryData = categories.find((cat) => cat.id === category)
        return categoryData ? categoryData.icon : FileText
    }

    return (
        <div className="md:container md:mx-auto p-4 md:p-8 bg-base-100 text-base-content rounded-lg shadow-xl">
            {/* Header */}
            <div className="text-center space-y-4 mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-center underline my-4">Documents</h1>
                <p className="text-base-content">
                    Professional collection of certificates, documents, and important files organized for easy access and
                    reference.
                </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
                {/* Search Input */}
                <div className="relative flex-1 max-w-md w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/60 h-4 w-4" />
                    <input
                        type="text"
                        placeholder="Search documents, tags, or descriptions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full input input-bordered focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label="Search documents" // Added for accessibility
                    />
                </div>
                <div className="flex items-center gap-4">
                    {/* View Mode Toggle */}
                    <div className="btn-group">
                        <button
                            className={`btn btn-sm ${viewMode === "grid" ? "btn-active btn-primary" : "btn-ghost"
                                }`}
                            onClick={() => setViewMode("grid")}
                            aria-label="Grid View" // Added for accessibility
                        >
                            <Grid3X3 className="h-4 w-4" />
                        </button>
                        <button
                            className={`btn btn-sm ${viewMode === "list" ? "btn-active btn-primary" : "btn-ghost"
                                }`}
                            onClick={() => setViewMode("list")}
                            aria-label="List View" // Added for accessibility
                        >
                            <List className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Sort By Select */}
                    <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-base-content/60" />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="select select-bordered select-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            aria-label="Sort by" // Added for accessibility
                        >
                            <option value="date">Sort by Date</option>
                            <option value="title">Sort by Title</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="w-full mb-8">
                <div className="tabs tabs-boxed grid grid-cols-3 lg:grid-cols-7 h-auto p-1 bg-base-200 rounded-md">
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <button // Changed from <a> to <button> for semantic correctness
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`tab tab-lg flex flex-col items-center gap-1 p-3 transition-colors ${selectedCategory === category.id
                                        ? "tab-active bg-primary text-primary-content"
                                        : "text-base-content/80 hover:bg-base-300"
                                    }`}
                                role="tab"
                                aria-selected={selectedCategory === category.id} // Added for accessibility
                            >
                                <Icon className="h-4 w-4" />
                                <span className="text-xs font-medium">{category.label}</span>
                                <span className="badge badge-sm badge-ghost">
                                    {category.count}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Document Display */}
                <div className="mt-8">
                    {filteredDocuments.length === 0 ? (
                        <div className="text-center py-12 bg-base-200 rounded-lg">
                            <FileText className="h-12 w-12 text-base-content/40 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2 text-base-content">No documents found</h3>
                            <p className="text-base-content/70">Try adjusting your search terms or category filter.</p>
                        </div>
                    ) : (
                        <>
                            {/* Grid View */}
                            {viewMode === "grid" && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredDocuments.map((doc) => {
                                        const CategoryIcon = getCategoryIcon(doc.category)
                                        return (
                                            <div
                                                key={doc.id}
                                                className="card bg-base-100 shadow-xl border border-base-300 hover:border-primary transition-all duration-300 group"
                                            >
                                                <div className="card-body p-6">
                                                    <div className="flex items-start justify-between pb-3">
                                                        <div className="flex items-center gap-2">
                                                            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                                <CategoryIcon className="h-5 w-5 text-primary" />
                                                            </div>
                                                            <div>
                                                                <span className="badge badge-outline badge-neutral">
                                                                    {doc.type}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <button
                                                            className="btn btn-ghost btn-sm btn-circle opacity-0 group-hover:opacity-100 transition-opacity"
                                                            onClick={() => window.open(doc.downloadUrl, "_blank")}
                                                            aria-label={`Download ${doc.title}`} // Added for accessibility
                                                        >
                                                            <Download className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                    <h2 className="card-title text-lg leading-tight mb-2">{doc.title}</h2>
                                                    <p className="text-sm text-base-content/70 line-clamp-3 mb-4">{doc.description}</p>
                                                    <div className="space-y-4">
                                                        {/* Tags */}
                                                        <div className="flex flex-wrap gap-1">
                                                            {doc.tags.map((tag, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="badge badge-accent badge-outline"
                                                                >
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {/* Document Info */}
                                                        <div className="flex items-center justify-between text-sm text-base-content/60">
                                                            <div className="flex items-center gap-1">
                                                                <Calendar className="h-3 w-3" />
                                                                <span>{formatDate(doc.date)}</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span>{doc.format}</span>
                                                                <span>•</span>
                                                                <span>{doc.size}</span>
                                                            </div>
                                                        </div>

                                                        {/* Action Button */}
                                                        <div className="card-actions justify-end">
                                                            <button
                                                                className="btn btn-primary w-full"
                                                                onClick={() => window.open(doc.downloadUrl, "_blank")}
                                                            >
                                                                <Download className="h-4 w-4 mr-2" />
                                                                Download Document
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}

                            {/* List View */}
                            {viewMode === "list" && (
                                <div className="space-y-3">
                                    {/* List Header */}
                                    <div className="hidden md:grid md:grid-cols-12 gap-4 px-4 py-2 bg-base-200 rounded-lg text-sm font-medium text-base-content/80">
                                        <div className="col-span-4">Document</div>
                                        <div className="col-span-2">Category</div>
                                        <div className="col-span-2">Date</div>
                                        <div className="col-span-2">Size</div>
                                        <div className="col-span-2">Actions</div>
                                    </div>

                                    {/* List Items */}
                                    {filteredDocuments.map((doc) => {
                                        const CategoryIcon = getCategoryIcon(doc.category)
                                        return (
                                            <div
                                                key={doc.id}
                                                className="bg-base-100 border border-base-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                                    {/* Document Info */}
                                                    <div className="col-span-1 md:col-span-4">
                                                        <div className="flex items-start gap-3">
                                                            <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                                                                <CategoryIcon className="h-4 w-4 text-primary" />
                                                            </div>
                                                            <div className="min-w-0 flex-1">
                                                                <h3 className="font-semibold text-sm leading-tight mb-1 truncate text-base-content">{doc.title}</h3>
                                                                <p className="text-xs text-base-content/70 line-clamp-2 md:line-clamp-1">
                                                                    {doc.description}
                                                                </p>
                                                                <div className="flex flex-wrap gap-1 mt-2 md:hidden">
                                                                    {doc.tags.slice(0, 2).map((tag, index) => (
                                                                        <span
                                                                            key={index}
                                                                            className="badge badge-accent badge-outline"
                                                                        >
                                                                            {tag}
                                                                        </span>
                                                                    ))}
                                                                    {doc.tags.length > 2 && (
                                                                        <span className="badge badge-ghost badge-sm">
                                                                            +{doc.tags.length - 2}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Category */}
                                                    <div className="col-span-1 md:col-span-2 hidden md:block">
                                                        <span className="badge badge-outline badge-neutral">
                                                            {doc.type}
                                                        </span>
                                                    </div>

                                                    {/* Date */}
                                                    <div className="col-span-1 md:col-span-2 hidden md:block">
                                                        <div className="flex items-center gap-1 text-sm text-base-content/60">
                                                            <Calendar className="h-3 w-3" />
                                                            <span>{formatDate(doc.date)}</span>
                                                        </div>
                                                    </div>

                                                    {/* Size */}
                                                    <div className="col-span-1 md:col-span-2 hidden md:block">
                                                        <div className="text-sm text-base-content/60">
                                                            <span>{doc.format}</span> • <span>{doc.size}</span>
                                                        </div>
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="col-span-1 md:col-span-2">
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                className="flex-1 md:flex-none flex items-center justify-center btn btn-sm btn-primary btn-outline"
                                                                onClick={() => window.open(doc.downloadUrl, "_blank")}
                                                            >
                                                                <Download className="h-3 w-3 mr-1" />
                                                                Download
                                                            </button>
                                                            <button
                                                                className="hidden md:flex btn btn-sm btn-ghost btn-circle"
                                                                onClick={() => window.open(doc.downloadUrl, "_blank")}
                                                                aria-label={`View ${doc.title}`} // Added for accessibility
                                                            >
                                                                <Eye className="h-3 w-3" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Mobile Info */}
                                                    <div className="col-span-1 md:hidden">
                                                        <div className="flex items-center justify-between text-xs text-base-content/60 pt-2 border-t border-base-200 mt-2">
                                                            <div className="flex items-center gap-4">
                                                                <span>{doc.type}</span>
                                                                <span>{formatDate(doc.date)}</span>
                                                            </div>
                                                            <span>
                                                                {doc.format} • {doc.size}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            <hr className="my-10 border-base-200" />

            {/* Statistics - Using DaisyUI 'stats' component for better structure */}
            <div className="stats stats-vertical md:stats-horizontal shadow w-full bg-base-200 text-base-content">
                <div className="stat">
                    <div className="stat-title">Total Documents</div>
                    <div className="stat-value text-primary">{documents.length}</div>
                    <div className="stat-desc">All your professional files</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Categories</div>
                    <div className="stat-value text-primary">{categories.length - 1}</div> {/* -1 to exclude 'All Documents' */}
                    <div className="stat-desc">Organized sections</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Certifications</div>
                    <div className="stat-value text-primary">
                        {documents.filter((d) => d.category === "certification").length}
                    </div>
                    <div className="stat-desc">Key professional achievements</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Years Experience</div>
                    <div className="stat-value text-primary">{new Date().getFullYear() - 2022}+</div>
                    <div className="stat-desc">Since first joining letter</div>
                </div>
            </div>
        </div>
    )
}