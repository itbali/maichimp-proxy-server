#!/usr/bin/env groovy

// include lib from https://bitbucket.org/tmrw-global/jenkins-pipeline-libraries/
/* groovylint-disable NoDef, VariableTypeRequired, DuplicateStringLiteral */
/* groovylint-disable-next-line CompileStatic, UnusedVariable, VariableName */

@Library('jenkins-pipeline-libraries') _

// use lib with default parameters
tmrwServiceGitFlow([
	projectName:'aired.tv',
	])
