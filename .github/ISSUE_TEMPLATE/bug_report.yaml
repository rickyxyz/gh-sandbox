name: 🐛 Bug Report
description: Create a bug report to help us improve
title: "[BUG] <bug description>"
labels: ["🐛 bug"]
body:
    - type: textarea
      attributes:
        label: Bug Description
        description: Please describe the bug you encountered
        placeholder: Feature xxx break when xxx
      validations:
        required: true
    - type: dropdown
      attributes:
        label: version
        description: What version are you running?
        multiple: false
        options:
          - 1.0.0
          - 2.0.0
        default: 0
      validations:
        required: true
    - type: checkboxes
      attributes:
        label: Additional Information
        description: Please check the following
        options:
          - label: The bug is reproducible
          - label: The program is running in a container/vm
