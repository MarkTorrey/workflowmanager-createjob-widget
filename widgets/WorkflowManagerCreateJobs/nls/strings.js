﻿define({
  root: ({
    _widgetLabel: "Workflow Manager Create Job",
    title: "Create a Workflow Manager Job",

    filterJobTypes: "Filter job types...",
    createJobForJobType: "Create a new job for {0}",

    notesLabel: "Comments",

    defaultDefineLOILabel: "Define Location",
    addFeature: "Add Feature",
    selectFeatures: "Select Features",
    aoiOverwritePrompt: "This will overwrite the current AOI.  Are you sure?",

    defaultExtPropsLabel: "Contact Information",

    defaultAttachmentsLabel: "Add an Attachment to the job",
    addAttachmentToJob: "Add an attachment to this job",
    fileTooLargeLabel: "Attachment file size exceeds limit, try a smaller file to add an attachment",
    processingFilename: "Processing {0} ...",
    successfulUploadAnother: "Successfully uploaded file! Upload another.",

    backBtnLabel: "Back",
    createJobBtnLabel: "Create Job",
    creatingJob: "Creating Job: {0}",
    defaultJobBeingCreatedLabel: "The job is being created, this could take a moment.",

    jobCreatedSuccessfully: "Job {0} created successfully.",
    jobCreatedWithErrors: "Job {0} created, but not all job properties were updated: ",

    errorUnableToConnectToServer: "Unable to connect to server {0}",
    errorInvalidUserCredentials: "Unable to retrieve user credentials",
    errorUserInvalid: "User '{0}' is not a valid user in the Workflow Manager system.",
    errorUserNoVisibleJobTypes: "No visible job types returned for user '{0}'.",
    errorUserNoCreateJobPrivilege: "User '{0}' does not have any privileges to create a job.",
    errorCreatingJob: "Unable to create job: {0}",
    errorOverlappingAOI: "Unable to create job. Specified AOI overlaps with an existing job AOI.",
    errorUpdatingExtProps: "Unable to update job extended properties: {0}",

    errorNoSelectedFeatures: "No features were returned from selection",
    errorRetrievingSelectedFeatures: "Error retrieving selectable features: {0}",
    errorUnsupportedGeometryType: "Selected features returned unsupported geometry type: {0}"
  })
});
